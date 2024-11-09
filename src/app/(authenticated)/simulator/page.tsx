'use client'

import {
  Button,
  Card,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
  Typography,
  Tabs,
} from 'antd'
import {
  PlayCircleOutlined,
  PlusOutlined,
  EditOutlined,
  SwapOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
import { Scenario } from '@prisma/client'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ScenarioSimulatorPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [selectedScenario, setSelectedScenario] = useState<string>()
  const [isCreating, setIsCreating] = useState(false)
  const [compareMode, setCompareMode] = useState(false)
  const [selectedScenarios, setSelectedScenarios] = useState<string[]>([])

  const { data: scenarios, refetch } = Api.scenario.findMany.useQuery({
    where: {
      OR: [{ userId: user?.id }, { isCustom: false }],
    },
  })

  const { mutateAsync: createScenario } = Api.scenario.create.useMutation()
  const { mutateAsync: updateScenario } = Api.scenario.update.useMutation()
  const { mutateAsync: deleteScenario } = Api.scenario.delete.useMutation()

  const handleCreateScenario = async (values: any) => {
    try {
      await createScenario({
        data: {
          name: values.name,
          description: values.description,
          parameters: {
            marketVolatility: values.marketVolatility,
            interestRate: values.interestRate,
            inflationRate: values.inflationRate,
          },
          isCustom: true,
          userId: user?.id,
        },
      })
      enqueueSnackbar('Scenario created successfully', { variant: 'success' })
      setIsCreating(false)
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to create scenario', { variant: 'error' })
    }
  }

  const handleUpdateScenario = async (values: any, scenarioId: string) => {
    try {
      await updateScenario({
        where: { id: scenarioId },
        data: {
          parameters: {
            marketVolatility: values.marketVolatility,
            interestRate: values.interestRate,
            inflationRate: values.inflationRate,
          },
        },
      })
      enqueueSnackbar('Scenario updated successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to update scenario', { variant: 'error' })
    }
  }

  const handleDeleteScenario = async (scenarioId: string) => {
    try {
      await deleteScenario({ where: { id: scenarioId } })
      enqueueSnackbar('Scenario deleted successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to delete scenario', { variant: 'error' })
    }
  }

  const handleRunScenario = (scenarioId: string) => {
    router.push(`/portfolio?scenarioId=${scenarioId}`)
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Scenario Simulator</Title>
      <Text>
        Test and analyze different market scenarios to understand potential
        impacts on your portfolio.
      </Text>

      <Space direction="vertical" style={{ width: '100%', marginTop: 24 }}>
        <Space>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setIsCreating(true)}
          >
            Create Custom Scenario
          </Button>
          <Button
            icon={<SwapOutlined />}
            onClick={() => setCompareMode(!compareMode)}
          >
            Compare Scenarios
          </Button>
        </Space>

        {isCreating && (
          <Card title="Create New Scenario">
            <Form onFinish={handleCreateScenario} layout="vertical">
              <Form.Item
                name="name"
                label="Scenario Name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item name="description" label="Description">
                <Input.TextArea />
              </Form.Item>
              <Form.Item
                name="marketVolatility"
                label="Market Volatility (%)"
                rules={[{ required: true }]}
              >
                <InputNumber min={0} max={100} />
              </Form.Item>
              <Form.Item
                name="interestRate"
                label="Interest Rate (%)"
                rules={[{ required: true }]}
              >
                <InputNumber min={0} max={100} />
              </Form.Item>
              <Form.Item
                name="inflationRate"
                label="Inflation Rate (%)"
                rules={[{ required: true }]}
              >
                <InputNumber min={0} max={100} />
              </Form.Item>
              <Space>
                <Button type="primary" htmlType="submit">
                  Create
                </Button>
                <Button onClick={() => setIsCreating(false)}>Cancel</Button>
              </Space>
            </Form>
          </Card>
        )}

        <Row gutter={[16, 16]}>
          {scenarios?.map((scenario: Scenario) => (
            <Col xs={24} sm={12} md={8} key={scenario.id}>
              <Card
                title={scenario.name}
                extra={
                  scenario.isCustom && (
                    <Button
                      type="text"
                      danger
                      icon={<DeleteOutlined />}
                      onClick={() => handleDeleteScenario(scenario.id)}
                    />
                  )
                }
              >
                <Text>{scenario.description}</Text>
                {compareMode ? (
                  <Button
                    style={{ marginTop: 16 }}
                    type={
                      selectedScenarios.includes(scenario.id)
                        ? 'primary'
                        : 'default'
                    }
                    onClick={() => {
                      if (selectedScenarios.includes(scenario.id)) {
                        setSelectedScenarios(
                          selectedScenarios.filter(id => id !== scenario.id),
                        )
                      } else if (selectedScenarios.length < 2) {
                        setSelectedScenarios([
                          ...selectedScenarios,
                          scenario.id,
                        ])
                      }
                    }}
                  >
                    Select for Comparison
                  </Button>
                ) : (
                  <Space style={{ marginTop: 16 }}>
                    <Button
                      type="primary"
                      icon={<PlayCircleOutlined />}
                      onClick={() => handleRunScenario(scenario.id)}
                    >
                      Run
                    </Button>
                    <Button
                      icon={<EditOutlined />}
                      onClick={() => setSelectedScenario(scenario.id)}
                    >
                      Adjust
                    </Button>
                  </Space>
                )}
              </Card>
            </Col>
          ))}
        </Row>

        {compareMode && selectedScenarios.length === 2 && (
          <Button
            type="primary"
            onClick={() =>
              router.push(`/portfolio?compare=${selectedScenarios.join(',')}`)
            }
          >
            Compare Selected Scenarios
          </Button>
        )}
      </Space>
    </PageLayout>
  )
}
