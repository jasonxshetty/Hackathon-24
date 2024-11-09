'use client'

import { Typography, Card, Row, Col, Space, Tag, List, Collapse } from 'antd'
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  AlertOutlined,
  LineChartOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
const { Panel } = Collapse
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function MarketSentimentPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  // Fetch portfolio assets with their sentiment scores
  const { data: portfolios } = Api.portfolio.findMany.useQuery({
    where: { userId: user?.id },
    include: { portfolioAssets: { include: { asset: true } } },
  })

  // Fetch latest news with sentiment
  const { data: news } = Api.news.findMany.useQuery({
    orderBy: { publishedAt: 'desc' },
    include: { asset: true },
  })

  const getSentimentColor = (score: string) => {
    const numScore = parseFloat(score)
    if (numScore >= 0.7) return '#52c41a'
    if (numScore >= 0.4) return '#faad14'
    return '#f5222d'
  }

  const getSentimentIcon = (score: string) => {
    const numScore = parseFloat(score)
    return numScore >= 0.5 ? (
      <ArrowUpOutlined style={{ color: '#52c41a' }} />
    ) : (
      <ArrowDownOutlined style={{ color: '#f5222d' }} />
    )
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <Title level={2}>
            <LineChartOutlined /> Market Sentiment Analysis
          </Title>
          <Paragraph>
            Monitor market sentiment and news for your portfolio assets
          </Paragraph>
        </div>

        {/* Portfolio Assets Sentiment */}
        <Card title="Portfolio Assets Sentiment">
          <Row gutter={[16, 16]}>
            {portfolios?.[0]?.portfolioAssets?.map(pa => (
              <Col xs={24} sm={12} md={8} key={pa.id}>
                <Card size="small">
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Text strong>{pa.asset?.name}</Text>
                    <Space>
                      <Text>Sentiment:</Text>
                      <Tag
                        color={getSentimentColor(
                          pa.asset?.sentimentScore || '0',
                        )}
                      >
                        {getSentimentIcon(pa.asset?.sentimentScore || '0')}
                        {pa.asset?.sentimentScore}
                      </Tag>
                    </Space>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </Card>

        {/* News with Sentiment */}
        <Card title="Latest Market News">
          <List
            dataSource={news}
            renderItem={item => (
              <List.Item>
                <Collapse style={{ width: '100%' }}>
                  <Panel
                    header={
                      <Space>
                        <Text strong>{item.headline}</Text>
                        <Tag
                          color={getSentimentColor(item.sentimentScore || '0')}
                        >
                          {getSentimentIcon(item.sentimentScore || '0')}
                          Sentiment: {item.sentimentScore}
                        </Tag>
                        {parseFloat(item.sentimentScore || '0') <= 0.3 && (
                          <Tag icon={<AlertOutlined />} color="error">
                            Alert
                          </Tag>
                        )}
                      </Space>
                    }
                    key={item.id}
                  >
                    <Space direction="vertical">
                      <Text type="secondary">Asset: {item.asset?.name}</Text>
                      <Paragraph>{item.summary}</Paragraph>
                      <Text type="secondary">
                        Published: {item.publishedAt}
                      </Text>
                    </Space>
                  </Panel>
                </Collapse>
              </List.Item>
            )}
          />
        </Card>

        {/* Sentiment Alerts */}
        <Card
          title={
            <Space>
              <AlertOutlined style={{ color: '#f5222d' }} />
              <span>Critical Sentiment Alerts</span>
            </Space>
          }
        >
          <List
            dataSource={portfolios?.[0]?.portfolioAssets?.filter(
              pa => parseFloat(pa.asset?.sentimentScore || '0') <= 0.3,
            )}
            renderItem={pa => (
              <List.Item>
                <Space>
                  <AlertOutlined style={{ color: '#f5222d' }} />
                  <Text strong>{pa.asset?.name}</Text>
                  <Tag color="error">
                    Critical Sentiment: {pa.asset?.sentimentScore}
                  </Tag>
                </Space>
              </List.Item>
            )}
            locale={{ emptyText: 'No critical alerts at the moment' }}
          />
        </Card>
      </Space>
    </PageLayout>
  )
}
