'use client'

import {
  Typography,
  Card,
  Progress,
  Space,
  Alert,
  List,
  Row,
  Col,
  Statistic,
} from 'antd'
import {
  ExclamationCircleOutlined,
  CheckCircleOutlined,
  WarningOutlined,
  LineChartOutlined,
  DashboardOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function RiskAnalysisPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  // Fetch portfolio data with assets
  const { data: portfolios } = Api.portfolio.findMany.useQuery({
    where: { userId: user?.id },
    include: {
      portfolioAssets: {
        include: {
          asset: true,
        },
      },
    },
  })

  const portfolio = portfolios?.[0]
  const riskScore = parseInt(portfolio?.riskScore || '0')

  const getRiskColor = (score: number) => {
    if (score <= 30) return '#52c41a'
    if (score <= 70) return '#faad14'
    return '#f5222d'
  }

  const getRiskLevel = (score: number) => {
    if (score <= 30) return 'Low Risk'
    if (score <= 70) return 'Medium Risk'
    return 'High Risk'
  }

  const riskAlerts = portfolio?.portfolioAssets
    ?.map(pa => ({
      asset: pa.asset?.name,
      riskFactor: pa.asset?.riskFactor,
      action:
        parseInt(pa.asset?.riskFactor || '0') > 70
          ? 'Consider reducing position'
          : 'Position within acceptable risk',
    }))
    .filter(alert => alert.riskFactor && parseInt(alert.riskFactor) > 50)

  return (
    <PageLayout layout="narrow">
      <Space
        direction="vertical"
        size="large"
        style={{ width: '100%', padding: '24px' }}
      >
        <Title level={2}>
          <DashboardOutlined /> Risk Analysis Dashboard
        </Title>
        <Text type="secondary">
          Monitor and analyze your portfolio's risk metrics and receive
          actionable insights
        </Text>

        {/* Risk Gauge */}
        <Card
          title={
            <>
              <ThunderboltOutlined /> Overall Risk Profile
            </>
          }
        >
          <Row gutter={[24, 24]} align="middle">
            <Col xs={24} md={12}>
              <Progress
                type="dashboard"
                percent={riskScore}
                strokeColor={getRiskColor(riskScore)}
                format={percent => (
                  <div style={{ textAlign: 'center' }}>
                    <div
                      style={{
                        fontSize: '24px',
                        color: getRiskColor(riskScore),
                      }}
                    >
                      {percent?.toString()}%
                    </div>
                    <div>{getRiskLevel(riskScore)}</div>
                  </div>
                )}
              />
            </Col>
            <Col xs={24} md={12}>
              <Space direction="vertical">
                <Statistic
                  title="Portfolio Value"
                  value={portfolio?.totalValue || '0'}
                  prefix="$"
                />
                <Text>Investor Profile: {portfolio?.investorProfile}</Text>
              </Space>
            </Col>
          </Row>
        </Card>

        {/* Risk Alerts */}
        <Card
          title={
            <>
              <ExclamationCircleOutlined /> Risk Alerts
            </>
          }
        >
          <List
            dataSource={riskAlerts}
            renderItem={item => (
              <List.Item>
                <Alert
                  message={`${item.asset} - Risk Factor: ${item.riskFactor}%`}
                  description={item.action}
                  type={
                    parseInt(item.riskFactor || '0') > 70 ? 'error' : 'warning'
                  }
                  showIcon
                />
              </List.Item>
            )}
            locale={{
              emptyText: (
                <Text type="secondary">No risk alerts at this time</Text>
              ),
            }}
          />
        </Card>

        {/* Asset Risk Analysis */}
        <Card
          title={
            <>
              <LineChartOutlined /> Individual Asset Risk Analysis
            </>
          }
        >
          <List
            dataSource={portfolio?.portfolioAssets}
            renderItem={item => (
              <List.Item>
                <Row style={{ width: '100%' }} gutter={[16, 16]}>
                  <Col xs={24} md={8}>
                    <Text strong>{item.asset?.name}</Text>
                  </Col>
                  <Col xs={24} md={8}>
                    <Progress
                      percent={parseInt(item.asset?.riskFactor || '0')}
                      status={
                        parseInt(item.asset?.riskFactor || '0') > 70
                          ? 'exception'
                          : 'active'
                      }
                      size="small"
                    />
                  </Col>
                  <Col xs={24} md={8}>
                    <Text>
                      Sentiment: {item.asset?.sentimentScore}
                      {parseInt(item.asset?.sentimentScore || '0') > 50 ? (
                        <CheckCircleOutlined
                          style={{ color: '#52c41a', marginLeft: '8px' }}
                        />
                      ) : (
                        <WarningOutlined
                          style={{ color: '#faad14', marginLeft: '8px' }}
                        />
                      )}
                    </Text>
                  </Col>
                </Row>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    </PageLayout>
  )
}
