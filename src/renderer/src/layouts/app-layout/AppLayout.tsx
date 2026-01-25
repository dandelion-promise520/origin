import { Layout } from 'antd'
import { JSX } from 'react'

import { AppContent } from './content'
import { AppHeader } from './header'
import { AppSider } from './sider'

export const AppLayout = (): JSX.Element => {
  return (
    <Layout className="drag h-dvh">
      <AppSider />
      <Layout>
        <AppHeader />
        <AppContent />
      </Layout>
    </Layout>
  )
}
