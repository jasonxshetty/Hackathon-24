'use client'

import { Typography, Table, Card, Row, Col, Spin, Empty } from 'antd'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import {
  StockOutlined,
  DollarCircleOutlined,
  RiseOutlined,
  AlertOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function PortfolioDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  // Fetch portfolio data with assets
  const { data: portfolios, isLoading: isLoadingPortfolio } =
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

  // Fetch news data
  const { data: news } = Api.news.findMany.useQuery({
    orderBy: { publishedAt: 'desc' },
    take: 5,
  })

  const columns = [
    {
      title: 'Asset',
      dataIndex: ['asset', 'name'],
      key: 'name',
      render: (text: string) => <Text strong>{text}</Text>,
    },
    {
      title: 'Symbol',
      dataIndex: ['asset', 'symbol'],
      key: 'symbol',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Purchase Price',
      dataIndex: 'purchasePrice',
      key: 'purchasePrice',
      render: (price: string) => `$${price}`,
    },
    {
      title: 'Current Price',
      dataIndex: ['asset', 'currentPrice'],
      key: 'currentPrice',
      render: (price: string) => `$${price}`,
    },
    {
      title: 'Risk Factor',
      dataIndex: ['asset', 'riskFactor'],
      key: 'riskFactor',
      render: (risk: string) => (
        <Text type={Number(risk) > 0.5 ? 'danger' : 'success'}>{risk}</Text>
      ),
    },
  ]

  if (isLoadingPortfolio) {
    return (
      <PageLayout layout="narrow">
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <Spin size="large" />
        </div>
      </PageLayout>
    )
  }

  const portfolio = portfolios?.[0]

  if (!portfolio) {
    return (
      <PageLayout layout="narrow">
        <Empty description="No portfolio found" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Portfolio Details</Title>
      <Text type="secondary">
        Track and analyze your investment portfolio performance
      </Text>

      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <StockOutlined style={{ fontSize: 24, color: '#1890ff' }} />
            <Title level={4}>Total Assets</Title>
            <Text>{portfolio.portfolioAssets?.length || 0}</Text>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <DollarCircleOutlined style={{ fontSize: 24, color: '#52c41a' }} />
            <Title level={4}>Total Value</Title>
            <Text>${portfolio.totalValue}</Text>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <RiseOutlined style={{ fontSize: 24, color: '#faad14' }} />
            <Title level={4}>Risk Score</Title>
            <Text>{portfolio.riskScore}</Text>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <AlertOutlined style={{ fontSize: 24, color: '#ff4d4f' }} />
            <Title level={4}>Profile</Title>
            <Text>{portfolio.investorProfile}</Text>
          </Card>
        </Col>
      </Row>

      <Card style={{ marginTop: 24 }}>
        <Title level={3}>Assets Breakdown</Title>
        <Table
          dataSource={portfolio.portfolioAssets}
          columns={columns}
          rowKey="id"
          pagination={false}
        />
      </Card>

      <Card style={{ marginTop: 24 }}>
        <Title level={3}>Latest News</Title>
        {news?.map(item => (
          <Card.Grid style={{ width: '100%' }} key={item.id}>
            <Title level={5}>{item.headline}</Title>
            <Text type="secondary">
              {dayjs(item.publishedAt).format('MMM D, YYYY')}
            </Text>
            <br />
            <Text>{item.summary}</Text>
          </Card.Grid>
        ))}
      </Card>
    </PageLayout>
  )
}
