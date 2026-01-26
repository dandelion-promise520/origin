import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import gsap from 'gsap'
import { JSX, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'

import { useLayoutContext } from '../LayoutContext'

import { menuConfig } from './menuConfig'

const menuItems = menuConfig.map((item) => ({
  key: item.key,
  icon: <item.icon />,
  label: item.label
}))

export const AppSider = (): JSX.Element => {
  const [collapsed, setCollapsed] = useState(true)
  const { getRef } = useLayoutContext()

  const location = useLocation()
  const navigate = useNavigate()

  return (
    <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
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
      <Menu
        selectedKeys={[location.pathname]}
        onSelect={({ key }) => {
          const contentElement = getRef('content')
          if (contentElement) {
            gsap.to(contentElement, {
              duration: 0.5,
              opacity: 0,
              y: 100,
              onComplete: () => {
                navigate(key)
                gsap.to(contentElement, {
                  duration: 0.5,
                  opacity: 1,
                  y: 0
                })
              }
            })
          } else {
            navigate(key)
          }
        }}
        theme="light"
        mode="inline"
        className="no-drag"
        items={menuItems}
      />
    </Sider>
  )
}
