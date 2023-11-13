import React from 'react'
import { Flex, Image } from '@chakra-ui/react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import paimon from '../assets/image/paimon.png'
import carousel from '../assets/image/carousel.png'
import { Box } from '@chakra-ui/react'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const UkmCarousel = () => {
  return (
    <Flex mx={'auto'} width={'75vw'} my={10}>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000
        }}
      >
        <SwiperSlide><Image src={carousel} /></SwiperSlide>
        <SwiperSlide><Image src={carousel} /></SwiperSlide>
        <SwiperSlide><Image src={carousel} /></SwiperSlide>
        <SwiperSlide><Image src={carousel} /></SwiperSlide>
      </Swiper>
    </Flex>
  )
}

export default UkmCarousel