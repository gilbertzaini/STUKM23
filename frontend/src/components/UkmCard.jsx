import React from 'react'
import { Card } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Text, Heading } from '@chakra-ui/react'
import "./UkmCard.css";

const UkmCard = (props) => {
  return (
    <Box className='containerBox'>

      <Card
        className='containerCard'
        height={{ base: "25vh", lg: "50vh" }}
        backgroundColor={'#E8C38B'}
        boxShadow={'lg'}
        border={'1px'}
      >
        <Box className='cardFront'>
          <Image
            src={props.path}
            mx={'auto'}
            my={'auto'}
            width={'70%'}
            draggable={false} />
        </Box>

        <Box
          className='cardBack'
          px={5}

        >
          <Heading
            size={{ base: "xs", lg: "sm" }}
            my={5}
            color={'#81653C'}
            fontFamily={'El Messiri'}
          >
            {props.name}
          </Heading>
          <Text color={'#81653C'}>Ketua</Text>
          <Text color={'#81653C'}>...</Text>
          <Text color={'#81653C'}>Wakil Ketua</Text>
          <Text color={'#81653C'}>...</Text>
        </Box>

      </Card>
    </Box>
  )
}

export default UkmCard