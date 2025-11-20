import '@radix-ui/themes/styles.css'
import './assets/main.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App'
import { Theme, ThemePanel } from '@radix-ui/themes'
import Menu from './components/menu/Menu'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme className="flex">
      <div className="w-auto flex justify-center items-center border-r-2 border-gray-4 p-4 overflow-hidden">
        <Menu />
      </div>
      <div className="w-11/12 flex justify-center items-center">
        <RouterProvider router={router} />
      </div>
      <ThemePanel />
    </Theme>
  </StrictMode>
)
