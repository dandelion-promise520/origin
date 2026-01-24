import { AppLayout } from '@renderer/layouts/app-layout/app-layout'
import { ChartAnalysis } from '@renderer/pages/ChartAnalysis'
import { ExpiryBoard } from '@renderer/pages/ExpiryBoard'
import { InventoryManagement } from '@renderer/pages/InventoryManagement'
import { createHashRouter } from 'react-router'

export const router = createHashRouter([
  {
    path: '/',
    Component: AppLayout,
    children: [
      { index: true, Component: ExpiryBoard },
      { path: 'InventoryManagement', Component: InventoryManagement },
      { path: 'ChartAnalysis', Component: ChartAnalysis }
    ]
  }
])
