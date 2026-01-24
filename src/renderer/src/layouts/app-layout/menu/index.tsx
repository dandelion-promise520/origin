import { AppstoreOutlined, BarChartOutlined, CalendarOutlined } from '@ant-design/icons'
import { HeaderKey } from '@renderer/layouts/app-layout/types'
import { AntMenu } from '@renderer/ui/antd'
import type { MenuProps as AntMenuProps } from 'antd'
import { JSX } from 'react'
import { Link } from 'react-router'

import { MenuProps } from './types'

export const Menu = ({ header, setHeader }: MenuProps): JSX.Element => {
  const menuItems = [
    {
      key: '效期看板',
      icon: <CalendarOutlined />,
      label: <Link to="/">效期看板</Link>
    },
    {
      key: '货物管理',
      icon: <AppstoreOutlined />,
      label: <Link to="/InventoryManagement">货物管理</Link>
    },
    {
      key: '图表分析',
      icon: <BarChartOutlined />,
      label: <Link to="/ChartAnalysis">图表分析</Link>
    }
  ] satisfies AntMenuProps['items']

  return (
    <AntMenu
      onSelect={(value) => {
        setHeader(value.key as HeaderKey)
      }}
      theme="light"
      mode="inline"
      defaultSelectedKeys={[header]}
      selectedKeys={[header]}
      className="no-drag"
      items={menuItems}
    />
  )
}
