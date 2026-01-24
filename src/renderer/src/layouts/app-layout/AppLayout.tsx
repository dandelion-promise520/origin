import { AntLayout } from '@renderer/ui/antd'
import gsap from 'gsap'
import { JSX, useEffect, useRef } from 'react'
import { useLocation } from 'react-router'

import { AppContent } from './content'
import { AppHeader } from './header'
import { AppSider } from './sider'

export const AppLayout = (): JSX.Element => {
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

  return (
    <AntLayout style={{ height: '100%' }} className="drag">
      <AppSider />
      <AntLayout>
        <AppHeader />
        <AppContent />
      </AntLayout>
    </AntLayout>
  )
}
