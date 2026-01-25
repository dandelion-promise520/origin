import { ChartAnalysis } from '@renderer/features/chart-analysis/ChartAnalysis'
import { ExpiryBoard } from '@renderer/features/expiry-board/ExpiryBoard'
import { InventoryManagement } from '@renderer/features/inventory-management/InventoryManagement'
import { AppLayout } from '@renderer/layouts/app-layout/AppLayout'
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
