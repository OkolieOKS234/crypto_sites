import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import gamingData from "../data/gaming"

const Gaming = () => {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination,  A11y]}
        spaceBetween={10}
        slidesPerView={3}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
        {/* Map through faucetData to render SwiperSlides */}
        {gamingData.map((data) => (
          <SwiperSlide key={data.index} className='w-[400px] text-white '>
            <div className='bg-zinc-500 w-72 m-auto mt-5'>
            <img
              src={data.imageURL}
              alt={data.nameOfSite}
              className='w-72'
            />
            <div className='p-6'>
            <h2 className=' text-2xl font-extrabold'>{data.nameOfSite}</h2>
            <p>Description: {data.description}</p>
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Gaming;
