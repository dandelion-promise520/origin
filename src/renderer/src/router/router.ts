import { AppLayout } from '@renderer/layouts/app-layout/AppLayout'
import { ChartAnalysis } from '@renderer/pages/chart-analysis/ChartAnalysis'
import { ExpiryBoard } from '@renderer/pages/expiry-board/ExpiryBoard'
import { InventoryManagement } from '@renderer/pages/inventory-management/InventoryManagement'
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
