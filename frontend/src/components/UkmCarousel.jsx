import React from 'react'
import { Flex, Image, Box } from '@chakra-ui/react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import carousel from '../assets/image/carousel.png'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import * as ukmActivity from '../data/ukmActivity'

const UkmCarousel = (props) => {
  return (
    <Flex
      mx={'auto'}
      width={{ base: "50vw", md: "67vw", xl: "70vw" }}
      height={{ base: "50vh", md: "60vh", xl: "70vh" }}
      my={'2rem'}
    >
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000
        }}
        style={{
          "--swiper-pagination-color": "#FFBA08",
          "--swiper-pagination-bullet-inactive-color": "#FFBA08",
          "--swiper-pagination-bullet-size": "1.5vh",
          "--swiper-navigation-color": "#FFBA08",
          "--swiper-navigation-size": "5vh",
        }}
      >
        <SwiperSlide>
            <Image
              height={{ base: "50vh", md: "60vh", xl: '70vh'}}
              width={{ base: "50vw", md: "50vw", xl: '62vw'}}
              margin={'auto'}
              objectFit={'cover'}
              borderRadius={'15px'}
            className='imageCarousel'
            src={props.ukmType === 'olahraga' ? ukmActivity.Olahraga1 : props.ukmType === 'senbud' ? ukmActivity.Senbud1 : ukmActivity.Sainsos1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
              height={{ base: "50vh", md: "60vh", xl: '70vh'}}
              width={{ base: "50vw", md: "50vw", xl: '62vw'}}
              margin={'auto'}
              objectFit={'cover'}
              borderRadius={'15px'}
            className='imageCarousel'
            src={props.ukmType === 'olahraga' ? ukmActivity.Olahraga2 : props.ukmType === 'senbud' ? ukmActivity.Senbud2 : ukmActivity.Sainsos2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
              height={{ base: "50vh", md: "60vh", xl: '70vh'}}
              width={{ base: "50vw", md: "50vw", xl: '62vw'}}
              margin={'auto'}
              objectFit={'cover'}
              borderRadius={'15px'}
            className='imageCarousel'
            src={props.ukmType === 'olahraga' ? ukmActivity.Olahraga3 : props.ukmType === 'senbud' ? ukmActivity.Senbud3 : ukmActivity.Sainsos3}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
              height={{ base: "50vh", md: "60vh", xl: '70vh'}}
              width={{ base: "50vw", md: "50vw", xl: '62vw'}}
              margin={'auto'}
              objectFit={'cover'}
              borderRadius={'15px'}
            className='imageCarousel'
            src={props.ukmType === 'olahraga' ? ukmActivity.Olahraga4 : props.ukmType === 'senbud' ? ukmActivity.Senbud4 : ukmActivity.Sainsos4}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
              height={{ base: "50vh", md: "60vh", xl: '70vh'}}
              width={{ base: "50vw", md: "50vw", xl: '62vw'}}
              margin={'auto'}
              objectFit={'cover'}
              borderRadius={'15px'}
            className='imageCarousel'
            src={props.ukmType === 'olahraga' ? ukmActivity.Olahraga5 : props.ukmType === 'senbud' ? ukmActivity.Senbud5 : ukmActivity.Sainsos5}
          />
        </SwiperSlide>
      </Swiper>
    </Flex>
  )
}

export default UkmCarousel