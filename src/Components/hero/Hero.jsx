
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import { laptop, logo } from '../../assets/images';
const Hero = () => {
    return (
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div>
            <img src={laptop} alt="laptop1"  className='' />
            </div>


        </SwiperSlide>
        <SwiperSlide>
           


        </SwiperSlide>
      
      </Swiper>
    );
};

export default Hero;