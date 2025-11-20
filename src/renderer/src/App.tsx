import { Outlet } from 'react-router'
import Menu from './components/menu/Menu'

const App = (): React.JSX.Element => {
  return (
    <div className="flex justify-center h-dvh items-center">
      <div className="w-auto h-full flex justify-center items-center border-r-2 border-gray-4 p-4 overflow-hidden">
        <Menu />
      </div>
      <div className="w-11/12 h-full flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  )
}

export default App
