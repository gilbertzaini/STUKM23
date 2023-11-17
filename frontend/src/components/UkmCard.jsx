import React from 'react'
import { Card } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Text, Heading } from '@chakra-ui/react'
import instagram from '../assets/logo/instagram.svg'
import { Link } from '@chakra-ui/react'
import "./UkmCard.css";

const UkmCard = (props) => {
  return (
    <Box className='containerBox'>
      <Card
        className='containerCard'
        height={{ base: "30vh", md: "28vh", xl: "42vh" }}
        backgroundColor={'#FFC26F'}
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
          height={'100%'}
        >
          <Box
            position={'absolute'}
            top={0}
            width={'100%'}
          >
            <Heading
              size={{ base: "xs", lg: "md" }}
              my={5}
              mx={3}
              color={'#81653C'}
              fontFamily={'El Messiri'}
            >
              {props.name}
            </Heading>
          </Box>

          <Box
            position={'absolute'}
            top={{ base: '40%', md: '30%' }}
            width={'100%'}
          >
            <Text color={'#81653C'} fontSize={{ base: "0.8rem", md: "1.5rem", xl: "1.2rem" }}>Ketua</Text>
            <Text color={'#81653C'} fontSize={{ base: "0.8rem", md: "1.5rem", xl: "1.2rem" }}>???</Text>
            <Text color={'#81653C'} fontSize={{ base: "0.8rem", md: "1.5rem", xl: "1.2rem" }}>Wakil Ketua</Text>
            <Text color={'#81653C'} fontSize={{ base: "0.8rem", md: "1.5rem", xl: "1.2rem" }}>???</Text>
          </Box>

          <Box
            position={'absolute'}
            bottom={5}
            width={'100%'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Image
              src={instagram}
              width={'2rem'}
              draggable={false}
            />
            <Link href={props.instagram} isExternal color={'#81653C'}>
              {props.instagram_user}
            </Link>
          </Box>
        </Box>

      </Card>
    </Box>
  )
}

export default UkmCard