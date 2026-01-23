import { PlusOutlined, SearchOutlined } from '@ant-design/icons'
import { getProduct } from '@renderer/api/product'
import { useQuery } from '@tanstack/react-query'
import { Button, ConfigProvider, Input, Select, Table } from 'antd'
import React from 'react'

export const InventoryManagement: React.FC = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['productData'],
    queryFn: async () => {
      const res = await getProduct()
      return res
    }
  })

  const columns = [
    {
      title: '产品名称',
      dataIndex: 'product_name',
      key: 'product_name'
    },
    {
      title: '单位',
      dataIndex: 'unit',
      key: 'unit'
    },
    {
      title: '类别',
      dataIndex: 'category',
      key: 'category'
    },
    {
      title: '存储位置',
      dataIndex: 'location',
      key: 'location'
    },
    {
      title: '保质期',
      dataIndex: 'shelf_life_days',
      key: 'shelf_life_days'
    },
    {
      title: '条码信息',
      dataIndex: 'barcode',
      key: 'barcode'
    },
    {
      title: '操作',
      key: 'action',
      render: () => <Button size="small">详情</Button>
    }
  ]

  return (
    <div className="flex flex-col gap-4">
      <header className="flex items-center justify-between">
        <Button icon={<PlusOutlined />} type="primary">
          新增货物
        </Button>
        <section className="flex gap-4">
          <Input placeholder="搜索产品..." prefix={<SearchOutlined />} />
          <Select
            style={{ minWidth: 140 }}
            showSearch={{
              filterOption: (input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }}
            placeholder="Select a person"
            options={[
              { value: '1', label: 'Jack' },
              { value: '2', label: 'Lucy' },
              { value: '3', label: 'Tom' }
            ]}
          />
        </section>
      </header>
      <main>
        <ConfigProvider
          theme={{
            components: {
              Table: {
                borderColor: '#cfcfcf'
              }
            }
          }}
        >
          {error ? (
            <div>请求数据出错：{error.message}</div>
          ) : (
            <Table
              className="test"
              bordered
              loading={isPending}
              dataSource={data?.data}
              columns={columns}
              rowClassName={(_, index) => (index % 2 === 0 ? 'bg-gray-100' : '')}
            />
          )}
        </ConfigProvider>
      </main>
    </div>
  )
}
