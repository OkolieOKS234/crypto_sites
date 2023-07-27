import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import faucetData from '../data/data';

const Faucets = () => {
  return (
    <>
      <Swiper
        // install Swiper modules
        // modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
        {/* Map through faucetData to render SwiperSlides */}
        {faucetData.map((data) => (
          <SwiperSlide key={data.index} className='w-[400px] text-white '>
            <div className='bg-zinc-500 w-72 m-auto mt-5'>
            <img
              src={data.imageURL}
              alt={data.nameOfSite}
              className='w-72'
            />
            <h2>{data.nameOfSite}</h2>
            <p>Claim Duration: {data.claimDuration}</p>
            <p>Perks: {data.perks}</p>
            <p>Withdrawal Method: {data.withdrawalMethod}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Faucets;
