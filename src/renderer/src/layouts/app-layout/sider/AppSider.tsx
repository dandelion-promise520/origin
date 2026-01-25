import {
  AppstoreOutlined,
  BarChartOutlined,
  CalendarOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons'
import { Button, Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { JSX, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'

// 菜单项配置
const menuConfig = [
  {
    key: '/',
    icon: <CalendarOutlined />,
    label: '效期看板'
  },
  {
    key: '/InventoryManagement',
    icon: <AppstoreOutlined />,
    label: '货物管理'
  },
  {
    key: '/ChartAnalysis',
    icon: <BarChartOutlined />,
    label: '图表分析'
  }
]

const menuItems = menuConfig.map((item) => ({
  key: item.key,
  icon: item.icon,
  label: item.label
}))

export const AppSider = (): JSX.Element => {
  const [collapsed, setCollapsed] = useState(true)

  const location = useLocation()
  const navigate = useNavigate()

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
      <Menu
        selectedKeys={[location.pathname]}
        onSelect={({ key }) => {
          // gsap.to(, {
          // duration: 2, // 动画持续2秒
          // opacity: 0,
          // y: 100,
          // onComplete: () => {
          // }
          // })
          navigate(key)
        }}
        theme="light"
        mode="inline"
        className="no-drag"
        items={menuItems}
      />
    </Sider>
  )
}
