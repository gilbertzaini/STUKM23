import React from 'react'
import { Flex, Image, Box } from '@chakra-ui/react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import carousel from '../assets/image/carousel.png'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import * as ukmActivity from '../data/ukmActivity'
import './UkmCarousel.css'

const UkmCarousel = (props) => {
  return (
    <Flex mx={'auto'} width={'80vw'} height={'70vh'} my={'2rem'}>
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
          "--swiper-navigation-color": "#FFBA08",
        }}
      >
        <SwiperSlide>
          <Image
            className='imageCarousel'
            src={props.ukmType === 'olahraga' ? ukmActivity.Olahraga1 : props.ukmType === 'senbud' ? ukmActivity.Senbud1 : carousel}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='imageCarousel'
            src={props.ukmType === 'olahraga' ? ukmActivity.Olahraga2 : props.ukmType === 'senbud' ? ukmActivity.Senbud2 : carousel}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='imageCarousel'
            src={props.ukmType === 'olahraga' ? ukmActivity.Olahraga3 : props.ukmType === 'senbud' ? ukmActivity.Senbud3 : carousel}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='imageCarousel'
            src={props.ukmType === 'olahraga' ? ukmActivity.Olahraga4 : props.ukmType === 'senbud' ? ukmActivity.Senbud4 : carousel}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='imageCarousel'
            src={props.ukmType === 'olahraga' ? ukmActivity.Olahraga5 : props.ukmType === 'senbud' ? ukmActivity.Senbud5 : carousel}
          />
        </SwiperSlide>
      </Swiper>
    </Flex>
  )
}

export default UkmCarousel