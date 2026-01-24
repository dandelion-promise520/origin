import { theme } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { JSX, useRef } from 'react'
import { Outlet } from 'react-router'

export const AppContent = (): JSX.Element => {
  const contentRef = useRef<HTMLDivElement>(null)

  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()

  return (
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
  )
}
