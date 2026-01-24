import {
  BellOutlined,
  CalendarOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Menu } from '@renderer/layouts/app-layout/menu'
import { AntLayout } from '@renderer/ui/antd'
import { Button, Card, theme } from 'antd'
import { Header } from 'antd/es/layout/layout'
import gsap from 'gsap'
import { JSX, useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router'

import { HeaderKey } from './types'

const { Sider, Content } = AntLayout

export const AppLayout = (): JSX.Element => {
  // 默认头部标题
  const [header, setHeader] = useState<HeaderKey>('效期看板')

  // 添加路由跳转动画
  const location = useLocation()
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 每次路由变化时执行动画
    const tl = gsap.timeline()

    // 退出动画
    tl.to(contentRef.current, {
      opacity: 0,
      x: '300px',
      duration: 0.3,
      ease: 'power2.inOut'
    })

    // 进入动画
    tl.to(
      contentRef.current,
      {
        opacity: 1,
        x: 0,
        duration: 0.3,
        ease: 'power2.inOut'
      },
      0 // 立即开始
    )

    console.log(location.pathname)
  }, [location.pathname]) // 监听路由变化

  // 主题与菜单配置
  const [collapsed, setCollapsed] = useState(true)
  const {
    token: { colorBgContainer, borderRadiusLG, colorBgLayout }
  } = theme.useToken()

  // 看板卡片部分配置
  const [cardData, _setCardData] = useState([
    { name: '总库存', quantity: 850, iconColor: 'blue', iconBgColor: '#dbeafe' },
    { name: '即将过期', quantity: 2, iconColor: '#d29d25', iconBgColor: '#fef9c3' },
    { name: '已过期', quantity: 1, iconColor: 'red', iconBgColor: '#fee2e2' },
    { name: '正常库存', quantity: 5, iconColor: 'green', iconBgColor: '#dcfce7' }
  ])

  return (
    <AntLayout style={{ height: '100%' }} className="drag">
      <Sider theme="light" trigger={null} collapsible collapsed={collapsed} id="cus-sider">
        <div className="flex flex-nowrap items-center">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 74,
              height: 64,
              flexShrink: 0
            }}
            className="no-drag"
          />

          <span
            className={`text-xl font-bold text-black ${collapsed ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 select-none`}
          >
            origin
          </span>
        </div>
        <Menu header={header} setHeader={setHeader} />
      </Sider>
      <AntLayout>
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
          {/* 如果是效期看板页的话，就加4个卡片 */}
          {header === '效期看板' && (
            <section className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-4">
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
        <Content
          ref={contentRef}
          className="no-drag"
          style={{
            margin: '16px 24px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG
          }}
        >
          <Outlet />
        </Content>
      </AntLayout>
    </AntLayout>
  )
}
