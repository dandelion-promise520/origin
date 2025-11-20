import { Flex } from '@radix-ui/themes'
import React from 'react'
import Title from './components/title'

const schedule = (): React.JSX.Element => {
  return (
    <Flex direction="column" justify="between" height="100%" width="100%">
      <Title />
      <Flex p="4" justify="center" align="center">
        内容部分
      </Flex>
    </Flex>
  )
}

export default schedule
