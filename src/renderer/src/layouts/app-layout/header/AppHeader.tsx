import { BellOutlined, CalendarOutlined, UserOutlined } from '@ant-design/icons'
import { Card, theme } from 'antd'
import { Header } from 'antd/es/layout/layout'
import { JSX, useState } from 'react'

export const AppHeader = (): JSX.Element => {
  const [header, _setHeader] = useState<string>('效期看板')

  const [cardData, _setCardData] = useState([
    { name: '总库存', quantity: 850, iconColor: 'blue', iconBgColor: '#dbeafe' },
    { name: '即将过期', quantity: 2, iconColor: '#d29d25', iconBgColor: '#fef9c3' },
    { name: '已过期', quantity: 1, iconColor: 'red', iconBgColor: '#fee2e2' },
    { name: '正常库存', quantity: 5, iconColor: 'green', iconBgColor: '#dcfce7' }
  ])

  const {
    token: { colorBgLayout }
  } = theme.useToken()

  return (
    <Header
      style={{
        height: 'auto',
        padding: 0,
        margin: '30px 24px 0 24px',
        background: colorBgLayout
      }}
      className="flex flex-col justify-center gap-4"
    >
      {/* 基础头部区域 */}
      <section className="flex items-center justify-between">
        <span className="text-4xl font-bold select-none">{header}</span>
        <div className="center gap-4">
          <BellOutlined className="no-drag text-4xl" />
          <UserOutlined className="no-drag text-4xl" />
        </div>
      </section>
      {/* 如果是效期看板页的话，就加卡片组件 */}
      {location.pathname === '/' && (
        <section className="grid grid-cols-[repeat(auto-fit,minmax(212px,1fr))] gap-4">
          {cardData.map((item) => (
            <Card key={item.name} className="no-drag">
              <div className="flex items-center gap-4">
                <CalendarOutlined
                  style={{
                    color: item.iconColor,
                    fontSize: 16,
                    backgroundColor: item.iconBgColor,
                    height: '40px',
                    width: '40px'
                  }}
                  className="center rounded-full"
                />
                <section className="flex flex-col">
                  <span className="text-gray-500">{item.name}</span>
                  <span className="text-xl font-bold">{item.quantity}</span>
                </section>
              </div>
            </Card>
          ))}
        </section>
      )}
    </Header>
  )
}
