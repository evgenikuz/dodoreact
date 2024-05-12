import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './SliderNewProducts.css';
import { data } from "../../dodo";

// import required modules
import { Navigation } from 'swiper/modules';
import NewItem from '../../UI/NewItem/NewItem';

export default function Test() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={5}
        centeredSlides={false}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {data.map((el) => (
          <SwiperSlide>
            <NewItem img={el.img} product={el.name} price={el.price} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
