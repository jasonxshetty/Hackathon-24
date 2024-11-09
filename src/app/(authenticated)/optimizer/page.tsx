'use client'

import {
  Typography,
  Card,
  InputNumber,
  Button,
  Tooltip,
  Row,
  Col,
  Space,
} from 'antd'
import {
  InfoCircleOutlined,
  SaveOutlined,
  BarChartOutlined,
} from '@ant-design/icons'
import { useState, useEffect } from 'react'
import type { Prisma } from '@prisma/client'
const { Title, Text, Paragraph } = Typography
type PortfolioWithAssets = Prisma.PortfolioGetPayload<{
  include: {
    portfolioAssets: {
      include: {
        asset: true
      }
    }
  }
}>
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function PortfolioOptimizerPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [modifiedAssets, setModifiedAssets] = useState<Record<string, number>>(
    {},
  )
  const [totalValue, setTotalValue] = useState<number>(0)
  const [riskScore, setRiskScore] = useState<number>(0)
  const [configName, setConfigName] = useState<string>('')

  const { data: portfolio, refetch } = Api.portfolio.findFirst.useQuery({
    where: { userId: user?.id },
    include: {
      portfolioAssets: {
        include: {
          asset: true,
        },
      },
    },
  })

  const { mutateAsync: saveConfiguration } =
    Api.portfolioConfiguration.create.useMutation()

  useEffect(() => {
    if (portfolio?.portfolioAssets) {
      const initialAssets: Record<string, number> = {}
      portfolio.portfolioAssets.forEach(pa => {
        initialAssets[pa.id] = Number(pa.quantity || 0)
      })
      setModifiedAssets(initialAssets)
      calculateMetrics(initialAssets)
    }
  }, [portfolio])

  const calculateMetrics = (assets: Record<string, number>) => {
    let totalVal = 0
    let weightedRisk = 0

    portfolio?.portfolioAssets?.forEach(pa => {
      const quantity = assets[pa.id]
      const price = Number(pa.asset?.currentPrice || 0)
      const risk = Number(pa.asset?.riskFactor || 0)

      const assetValue = quantity * price
      totalVal += assetValue
      weightedRisk += assetValue * risk
    })

    setTotalValue(totalVal)
    setRiskScore(totalVal > 0 ? weightedRisk / totalVal : 0)
  }

  const handleQuantityChange = (
    portfolioAssetId: string,
    value: number | null,
  ) => {
    const newAssets = {
      ...modifiedAssets,
      [portfolioAssetId]: value || 0,
    }
    setModifiedAssets(newAssets)
    calculateMetrics(newAssets)
  }

  const handleSaveConfiguration = async () => {
    try {
      if (!portfolio?.id) return

      await saveConfiguration({
        data: {
          name: `Configuration ${Date.now()}`,
          configuration: modifiedAssets,
          simulatedRiskScore: riskScore.toString(),
          simulatedValue: totalValue.toString(),
          portfolioId: portfolio.id,
          userId: user?.id,
        },
      })

      enqueueSnackbar('Configuration saved successfully', {
        variant: 'success',
      })
    } catch (error) {
      enqueueSnackbar('Failed to save configuration', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" style={{ width: '100%' }} size="large">
        <Title level={2}>Portfolio Optimizer</Title>
        <Paragraph>
          Modify your asset quantities to simulate different portfolio
          allocations and analyze their impact on risk and value.
        </Paragraph>

        <Card title="Portfolio Metrics">
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Text strong>Total Value: </Text>
              <Text>${totalValue.toFixed(2)}</Text>
            </Col>
            <Col span={12}>
              <Text strong>Risk Score: </Text>
              <Text>{riskScore.toFixed(2)}</Text>
            </Col>
          </Row>
        </Card>

        <Card title="Asset Allocation">
          {portfolio?.portfolioAssets?.map(pa => (
            <Row key={pa.id} gutter={[16, 16]} style={{ marginBottom: '16px' }}>
              <Col span={8}>
                <Text strong>{pa.asset?.name}</Text>
              </Col>
              <Col span={8}>
                <InputNumber
                  min={0}
                  value={modifiedAssets[pa.id]}
                  onChange={value => handleQuantityChange(pa.id, value)}
                  style={{ width: '100%' }}
                />
              </Col>
              <Col span={8}>
                <Tooltip title="Current market price and risk factor impact your portfolio's overall metrics">
                  <InfoCircleOutlined style={{ marginLeft: '8px' }} />
                </Tooltip>
              </Col>
            </Row>
          ))}
        </Card>

        <Button
          type="primary"
          icon={<SaveOutlined />}
          onClick={handleSaveConfiguration}
          block
        >
          Save Configuration
        </Button>

        <Button
          icon={<BarChartOutlined />}
          onClick={() => router.push('/risk-analysis')}
          block
        >
          View Risk Analysis
        </Button>
      </Space>
    </PageLayout>
  )
}
