import { AntMenu } from '@renderer/ui/antd'
import { JSX } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'

import { menuConfig } from './menu.config'

const menuItems = menuConfig.map((item) => ({
  key: item.key,
  icon: <item.icon />,
  label: <Link to={item.key}>{item.label}</Link>
}))

export const AppMenu = (): JSX.Element => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <AntMenu
      selectedKeys={[location.pathname]}
      onSelect={({ key }) => {
        navigate(key)
      }}
      theme="light"
      mode="inline"
      className="no-drag"
      items={menuItems}
    />
  )
}
