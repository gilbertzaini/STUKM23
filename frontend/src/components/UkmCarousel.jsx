import React from 'react'
import { Flex, Image } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import paimon from '../assets/image/paimon.png'
import 'swiper/css'

const UkmCarousel = () => {
  return (
    <Flex mx={'auto'} width={'75vw'}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide><Image src={paimon} /></SwiperSlide>
        <SwiperSlide><Image src={paimon} /></SwiperSlide>
        <SwiperSlide><Image src={paimon} /></SwiperSlide>
        <SwiperSlide><Image src={paimon} /></SwiperSlide>
      </Swiper>
    </Flex>
  )
}

export default UkmCarousel