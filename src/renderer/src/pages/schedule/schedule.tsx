import { Flex, Separator } from '@radix-ui/themes'
import React, { useEffect, useState } from 'react'
import Title from './components/Title'

const schedule = (): React.JSX.Element => {
  const data = [
    {
      id: '#92',
      status: 'Draft',
      machine: 'Fujifilm XT20(2x); Tripod Xtramax(3x); 50mm Leica Lens (1x);',
      startTime: '3 Nov,2:00pm',
      endTime: '9 Nov,2:00pm',
      avatar: 'https://***',
      name: 'Darrell Steward',
      device: 'Via Website'
    },
    {
      id: '#92',
      status: 'Over Time',
      machine: 'Fujifilm XT20(2x); Tripod Xtramax(3x); 50mm Leica Lens (1x);',
      startTime: '3 Nov,2:00pm',
      endTime: '9 Nov,2:00pm',
      avatar: 'https://***',
      name: 'Darrell Steward',
      device: 'Via Website'
    },
    {
      id: '#92',
      status: 'Active',
      machine: 'Fujifilm XT20(2x); Tripod Xtramax(3x); 50mm Leica Lens (1x);',
      startTime: '3 Nov,2:00pm',
      endTime: '9 Nov,2:00pm',
      avatar: 'https://***',
      name: 'Darrell Steward',
      device: 'Via Website'
    },
    {
      id: '#92',
      status: 'Draft',
      machine: 'Fujifilm XT20(2x); Tripod Xtramax(3x); 50mm Leica Lens (1x);',
      startTime: '3 Nov,2:00pm',
      endTime: '9 Nov,2:00pm',
      avatar: 'https://***',
      name: 'Darrell Steward',
      device: 'Via Website'
    },
    {
      id: '#92',
      status: 'Draft',
      machine: 'Fujifilm XT20(2x); Tripod Xtramax(3x); 50mm Leica Lens (1x);',
      startTime: '3 Nov,2:00pm',
      endTime: '9 Nov,2:00pm',
      avatar: 'https://***',
      name: 'Darrell Steward',
      device: 'Via Website'
    },
    {
      id: '#92',
      status: 'Draft',
      machine: 'Fujifilm XT20(2x); Tripod Xtramax(3x); 50mm Leica Lens (1x);',
      startTime: '3 Nov,2:00pm',
      endTime: '9 Nov,2:00pm',
      avatar: 'https://***',
      name: 'Darrell Steward',
      device: 'Via Website'
    }
  ]

  function GetStatus(item: string): React.JSX.Element {
    const [template, setTemplate] = useState<React.JSX.Element>(
      <>
        <span className="icon-[basil--lightning-alt-solid] text-2xl text-blue-400" />
        <span className="text-gray-10 font-medium text-md">{item}111</span>
      </>
    )

    useEffect(() => {
      switch (item) {
        case 'Draft':
          setTemplate(
            <>
              <span className="icon-[basil--lightning-alt-solid] text-2xl text-blue-400" />
              <span className="text-gray-10 font-medium text-md">{item}111</span>
            </>
          )
          break
        case 'Over Time':
          setTemplate(
            <>
              <span className="icon-[basil--lightning-alt-solid] text-2xl text-blue-400" />
              <span className="text-gray-10 font-medium text-md">{item}222</span>
            </>
          )
          break
        case 'Active':
          setTemplate(
            <>
              <span className="icon-[basil--lightning-alt-solid] text-2xl text-blue-400" />
              <span className="text-gray-10 font-medium text-md">{item}333</span>
            </>
          )
          break
      }
    }, [item])

    return template
  }

  return (
    <Flex direction="column" height="100%" width="100%">
      <Title />
      <Flex p="4" justify="center" align="center">
        <div className="grid gap-6 grid-cols-3">
          {data.map((item) => (
            <div key={item.id} className="flex flex-col border-2 border-gray-4 rounded-md p-4">
              <div className="flex items-center">
                <span className="text-gray-10 font-bold text-xl">{item.id}</span>
                <Separator mx="2" size="1" orientation="vertical" />
                {GetStatus(item.status)}
              </div>
              <span>{item.machine}</span>
              <span>{item.startTime}</span>
              <span>{item.endTime}</span>
              <span>{item.avatar}</span>
              <span>{item.name}</span>
              <span>{item.device}</span>
            </div>
          ))}
        </div>
      </Flex>
    </Flex>
  )
}

export default schedule
