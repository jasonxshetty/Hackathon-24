'use client'

import {
  Typography,
  Card,
  Row,
  Col,
  Statistic,
  Select,
  Alert,
  Spin,
} from 'antd'
import {
  PieChartOutlined,
  DollarCircleOutlined,
  SafetyOutlined,
  BellOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  // Fetch portfolio data
  const { data: portfolios, isLoading: portfoliosLoading } =
    Api.portfolio.findMany.useQuery({
      where: { userId: user?.id },
      include: {
        portfolioAssets: {
          include: {
            asset: true,
          },
        },
      },
    })

  // Fetch latest news
  const { data: news } = Api.news.findMany.useQuery({
    orderBy: { publishedAt: 'desc' },
    take: 3,
  })

  // Handle profile change
  const { mutateAsync: updatePortfolio } = Api.portfolio.update.useMutation()
  const handleProfileChange = async (portfolioId: string, profile: string) => {
    try {
      await updatePortfolio({
        where: { id: portfolioId },
        data: { investorProfile: profile },
      })
      enqueueSnackbar('Investor profile updated successfully', {
        variant: 'success',
      })
    } catch (error) {
      enqueueSnackbar('Failed to update investor profile', { variant: 'error' })
    }
  }

  if (portfoliosLoading) {
    return (
      <PageLayout layout="narrow">
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <Spin size="large" />
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Portfolio Overview</Title>
      <Text type="secondary">
        Monitor your investments and market updates in real-time
      </Text>

      <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
        {portfolios?.map(portfolio => (
          <Col xs={24} key={portfolio.id}>
            <Card
              title={portfolio.name}
              extra={
                <Select
                  defaultValue={portfolio.investorProfile || 'BALANCED'}
                  style={{ width: 120 }}
                  onChange={value => handleProfileChange(portfolio.id, value)}
                  options={[
                    { value: 'CONSERVATIVE', label: 'Conservative' },
                    { value: 'BALANCED', label: 'Balanced' },
                    { value: 'AGGRESSIVE', label: 'Aggressive' },
                  ]}
                />
              }
            >
              <Row gutter={16}>
                <Col xs={24} sm={8}>
                  <Statistic
                    title="Total Value"
                    value={portfolio.totalValue || '0'}
                    prefix={<DollarCircleOutlined />}
                  />
                </Col>
                <Col xs={24} sm={8}>
                  <Statistic
                    title="Risk Score"
                    value={portfolio.riskScore || '0'}
                    prefix={<SafetyOutlined />}
                    suffix="/100"
                  />
                </Col>
                <Col xs={24} sm={8}>
                  <Statistic
                    title="Assets"
                    value={portfolio.portfolioAssets?.length || 0}
                    prefix={<PieChartOutlined />}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>

      <Title level={3} style={{ marginTop: '24px' }}>
        <BellOutlined /> Market Updates
      </Title>
      <Row gutter={[16, 16]}>
        {news?.map(item => (
          <Col xs={24} sm={8} key={item.id}>
            <Card>
              <Text strong>{item.headline}</Text>
              <br />
              <Text type="secondary">{item.summary}</Text>
              <br />
              <Text
                type={
                  Number(item.sentimentScore) > 0
                    ? 'success'
                    : Number(item.sentimentScore) < 0
                      ? 'danger'
                      : 'secondary'
                }
              >
                Sentiment: {item.sentimentScore}
              </Text>
            </Card>
          </Col>
        ))}
      </Row>

      <Alert
        style={{ marginTop: '24px' }}
        message="Portfolio Actions"
        description={
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={8}>
              <Card hoverable onClick={() => router.push('/risk-analysis')}>
                Risk Analysis
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card hoverable onClick={() => router.push('/market-sentiment')}>
                Market Sentiment
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card hoverable onClick={() => router.push('/simulator')}>
                Scenario Simulator
              </Card>
            </Col>
          </Row>
        }
        type="info"
        showIcon
      />
    </PageLayout>
  )
}
