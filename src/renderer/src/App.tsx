import { Outlet } from 'react-router'
import Menu from './components/menu/Menu'
import { Flex } from '@radix-ui/themes'

const App = (): React.JSX.Element => {
  return (
    <Flex justify="between" align="center" height="100dvh">
      <Flex
        justify="center"
        align="center"
        height="100%"
        width="auto"
        className="border-r-2 border-gray-4 px-4 py-8 overflow-hidden drag"
      >
        <Menu />
      </Flex>
      <Flex justify="center" align="center" height="100%" width="95%">
        <Outlet />
      </Flex>
    </Flex>
  )
}

export default App
