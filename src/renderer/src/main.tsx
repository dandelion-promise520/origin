import './assets/main.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router'

import App from './App'
import { ChartAnalysis } from './pages/ChartAnalysis'
import { ExpiryBoard } from './pages/ExpiryBoard'
import { InventoryManagement } from './pages/InventoryManagement'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 分钟后数据才被认为过期
      gcTime: 10 * 60 * 1000 // 10 分钟后删除未使用的缓存
    }
  }
})

const router = createHashRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true, Component: ExpiryBoard },
      { path: 'InventoryManagement', Component: InventoryManagement },
      { path: 'ChartAnalysis', Component: ChartAnalysis }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
)
