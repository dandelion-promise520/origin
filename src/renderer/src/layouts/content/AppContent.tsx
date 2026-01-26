import { theme } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { JSX } from 'react'
import { Outlet } from 'react-router'

import { useLayoutContext } from '../LayoutContext'

export const AppContent = (): JSX.Element => {
  const { registerRef } = useLayoutContext()
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()

  return (
    <Content
      ref={registerRef('content')}
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
