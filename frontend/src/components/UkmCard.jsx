import React from 'react'
import { Card } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

const UkmCard = (props) => {
  return (
    <Card
      height={{base: "25vh", lg: "50vh"}}
      backgroundColor={'#E8C38B'}
      boxShadow={'lg'}
      border={'1px'}>
      <Image
        src={props.path}
        mx={'auto'}
        my={'auto'}
        width={'70%'}
        draggable={false} />
    </Card>
  )
}

export default UkmCard