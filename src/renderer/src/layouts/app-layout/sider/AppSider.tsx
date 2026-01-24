import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { JSX, useState } from 'react'

import { AppMenu } from './AppMenu'

export const AppSider = (): JSX.Element => {
  const [collapsed, setCollapsed] = useState(true)

  return (
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
      <AppMenu />
    </Sider>
  )
}
