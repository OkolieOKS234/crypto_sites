import React from 'react'
import {Reveal } from "react-awesome-reveal";
import Coinpayu from "../assets/sites/coinpayu.jpg"
import Earnviv from "../assets/sites/earnviv.jpg"
import VieFaucet from "../assets/sites/viefaucet.jpg"
import AdDoge from "../assets/sites/ad-doge.jpg"
import Cryptoflare from "../assets/sites/cryptoflare.jpg"
import Coinpayz from "../assets/sites/coinpayz.jpg"
import EarnCrypto from "../assets/sites/earncrypto.jpg"
import Dutchy from "../assets/sites/dutchycorp.jpg"
import Faucet4u from "../assets/sites/faucet4u.jpg"
import Claimbits from "../assets/sites/claimbits.jpg"
import BtcAdSpace from "../assets/sites/btcadspace.jpg"
import FaucetCrypto from "../assets/sites/faucetcrypto.jpg"
import AdBtc from "../assets/sites/adbtc.jpg"

import { useState, useEffect, useRef } from 'react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Faucets = () => {
// Width Checker
const [slidesPerView, setSlidesPerView] = useState(3);
const swiperRef = useRef(null);
SwiperCore.use([Navigation, Pagination, A11y]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth <= 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
// update a fresh set of 3
const updateSlides = () => {
  if (swiperRef.current) {
    swiperRef.current;
  }
};
  const handleSlideChange = () => {
    const slides = swiperRef.current.slides;
    const activeIndex = swiperRef.current.activeIndex;
    const numSlides = slides.length;

    const startIndex = activeIndex + numSlides - (numSlides % slidesPerView);
    const newSlides = [];

    for (let i = 0; i < slidesPerView; i++) {
      const index = (startIndex + i) % numSlides;
      newSlides.push(slides[index]);
    }

    swiperRef.current.slides = newSlides;
    swiperRef.current.update();
  };





  return (
    <>
<div className='mx-9 sites flex flex-wrap gap-4 py-3'>
<Swiper
      // install Swiper modules
      modules={[Navigation, Pagination,  A11y]}
      spaceBetween={50}
      slidesPerView={slidesPerView}
      navigation
      pagination={{ clickable: true }}
      ref={swiperRef}
      onSlideChange={handleSlideChange}
      onInit={updateSlides}
    >

                {/* First Card */}
                <SwiperSlide>
                <Reveal triggerOnce={true}>
        <div className=' bg-slate-950 shadow-lg pb-3 hover:scale-110 rounded-xl'>
            <div className='h-[580px] w-[350px]  ' >
            <img src={Coinpayu} alt=""  className=' w-56 m-auto object-contain shadow-2xl pt-6 shadow-red-600'/>
            <h3 className='text-2xl text-white text-center '>Coinpayu</h3>
            <ul className='text-white list-none text-center'>
              <li className='list-inside flex mx-12' >Claim every 60 minutes</li>
              <li className='list-inside flex mx-12'>Earn passive income</li>
              <li className='list-inside flex mx-12'>Direct withdrawal</li>
              <li className='list-inside flex mx-12'>Faucetpay Withdrawal</li>
              <div className='flex gap-3 justify-center py-4'>
              <button className='py-1 px-3 rounded bg-green-500 hover:bg-green-950'>Get Started</button>
              <button className='py-1 px-3 bg-blue-800 hover:bg-blue-950 rounded'>Payment Proof</button>

              </div>
            </ul>
            <p className='text-center text-2xl'>⭐⭐⭐⭐⭐</p>
            </div>
            </div>
            </Reveal>
            </SwiperSlide>
            
{/* Second */}
<SwiperSlide>
<Reveal triggerOnce={true}>
        <div className=' bg-slate-950 shadow-lg pb-3 hover:scale-110 rounded-xl'>
            <div className='h-[580px] w-[350px]  ' >
            <img src={Cryptoflare} alt=""  className=' w-56 m-auto object-contain shadow-2xl shadow-red-600 pt-6 '/>
            <h3 className='text-2xl text-white text-center '>Cryptoflare</h3>
            <ul className='text-white list-none text-center'>
              <li className='list-inside flex mx-12' >Claim every 15 minutes</li>
              <li className='list-inside flex mx-12'>Earn passive income</li>
              <li className='list-inside flex mx-12'>Direct withdrawal</li>
              <li className='list-inside flex mx-12'>Faucetpay Withdrawal</li>
              <div className='flex gap-3 justify-center py-4'>
              <button className='py-1 px-3 rounded bg-green-500 hover:bg-green-950'>Get Started</button>
              <button className='py-1 px-3 bg-blue-800 hover:bg-blue-950 rounded'>Payment Proof</button>

              </div>
            </ul>
            <p className='text-center text-2xl'>⭐⭐⭐⭐⭐</p>
            </div>
            </div>
            </Reveal>
            </SwiperSlide>
{/* Third */}
<SwiperSlide>
<Reveal triggerOnce={true}>
        <div className=' bg-slate-950 shadow-lg pb-3 hover:scale-110 rounded-xl'>
            <div className='h-[580px] w-[350px]  ' >
            <img src={Earnviv} alt=""  className=' w-56 m-auto object-contain shadow-2xl shadow-black pt-6'/>
            <h3 className='text-2xl text-white text-center '>Earnviv</h3>
            <ul className='text-white list-none text-center'>
              <li className='list-inside flex mx-12' >Earn by playing games</li>
              <li className='list-inside flex mx-12'>Earn daily rewards</li>
              <li className='list-inside flex mx-12'>Direct withdrawal</li>
              <li className='list-inside flex mx-12'>Faucetpay Withdrawal</li>
              <div className='flex gap-3 justify-center py-4'>
              <button className='py-1 px-3 rounded bg-green-500 hover:bg-green-950'>Get Started</button>
              <button className='py-1 px-3 bg-blue-800 hover:bg-blue-950 rounded'>Payment Proof</button>

              </div>
            </ul>
            <p className='text-center text-2xl'>⭐⭐⭐⭐⭐</p>
            </div>
            </div>
            </Reveal>
            </SwiperSlide>
            {/* fOURTH */}
            <SwiperSlide>
            <Reveal triggerOnce={true}>
        <div className=' bg-slate-950 shadow-lg pb-3 hover:scale-110 rounded-xl'>
            <div className='h-[580px] w-[350px]  ' >
            <img src={Dutchy} alt=""  className=' w-56 m-auto object-contain shadow-2xl pt-6 shadow-red-600'/>
            <h3 className='text-2xl text-white text-center '>Dutchy Corp</h3>
            <ul className='text-white list-none text-center'>
              <li className='list-inside flex mx-12' >Claim every 4 minutes</li>
              <li className='list-inside flex mx-12'>Earn passive income</li>
              <li className='list-inside flex mx-12'>Direct withdrawal</li>
              <li className='list-inside flex mx-12'>Faucetpay Withdrawal</li>
              <div className='flex gap-3 justify-center py-4'>
              <button className='py-1 px-3 rounded bg-green-500 hover:bg-green-950'>Get Started</button>
              <button className='py-1 px-3 bg-blue-800 hover:bg-blue-950 rounded'>Payment Proof</button>

              </div>
            </ul>
            <p className='text-center text-2xl'>⭐⭐⭐⭐⭐</p>
            </div>
            </div>
            </Reveal>
            </SwiperSlide>
{/* Fifth */}
<SwiperSlide>
<Reveal triggerOnce={true}>
        <div className=' bg-slate-950 shadow-lg pb-3 hover:scale-110 rounded-xl'>
            <div className='h-[580px] w-[350px]'>
            <img src={AdDoge} alt=""  className=' w-56 m-auto object-contain shadow-2xl pt-6 shadow-blue-600'/>
            <h3 className='text-2xl text-white text-center '>Ad-doge</h3>
            <ul className='text-white list-none text-center'>
              <li className='list-inside flex mx-12' >Claim every 10 minutes</li>
              <li className='list-inside flex mx-12'>Earn by reading articles</li>
              <li className='list-inside flex mx-12'>Direct withdrawal</li>
              <li className='list-inside flex mx-12'>Faucetpay Withdrawal</li>
              <div className='flex gap-3 justify-center py-4'>
              <button className='py-1 px-3 rounded bg-green-500 hover:bg-green-950'>Get Started</button>
              <button className='py-1 px-3 bg-blue-800 hover:bg-blue-950 rounded'>Payment Proof</button>

              </div>
            </ul>
            <p className='text-center text-2xl'>⭐⭐⭐⭐⭐</p>
            </div>
            </div>
            </Reveal>
            </SwiperSlide>
{/* Sixth */}
<SwiperSlide>
<Reveal triggerOnce={true}>
        <div className=' bg-slate-950 shadow-lg pb-3 hover:scale-110 rounded-xl'>
            <div className='h-[580px] w-[350px]  ' >
            <img src={Coinpayu} alt=""  className=' w-56 m-auto object-contain shadow-2xl shadow-orange-600 pt-6'/>
            <h3 className='text-2xl text-white text-center '>Cryptowin</h3>
            <ul className='text-white list-none text-center'>
              <li className='list-inside flex mx-12' >Claim every 15 minutes</li>
              <li className='list-inside flex mx-12'>Earn passive income</li>
              <li className='list-inside flex mx-12'>Direct withdrawal</li>
              <li className='list-inside flex mx-12'>Faucetpay Withdrawal</li>
              <div className='flex gap-3 justify-center py-4'>
              <button className='py-1 px-3 rounded bg-green-500 hover:bg-green-950'>Get Started</button>
              <button className='py-1 px-3 bg-blue-800 hover:bg-blue-950 rounded'>Payment Proof</button>

              </div>
            </ul>
            <p className='text-center text-2xl'>⭐⭐⭐⭐⭐</p>
            </div>
            </div>
            </Reveal>
            </SwiperSlide>
            {/* Seventh */}
            <SwiperSlide>
            <Reveal triggerOnce={true}>
        <div className=' bg-slate-950 shadow-lg pb-3 hover:scale-110 rounded-xl'>
            <div className='h-[580px] w-[350px]  ' >
            <img src={EarnCrypto} alt=""  className=' w-56 m-auto object-contain shadow-2xl pt-6 shadow-white'/>
            <h3 className='text-2xl text-white text-center '>Earn Crypto</h3>
            <ul className='text-white list-none text-center'>
              <li className='list-inside flex mx-12' >Claim every 10 seconds</li>
              <li className='list-inside flex mx-12'>Earn from shortlinks</li>
              <li className='list-inside flex mx-12'>Direct withdrawal</li>
              <li className='list-inside flex mx-12'>Faucetpay Withdrawal</li>
              <div className='flex gap-3 justify-center py-4'>
              <button className='py-1 px-3 rounded bg-green-500 hover:bg-green-950'>Get Started</button>
              <button className='py-1 px-3 bg-blue-800 hover:bg-blue-950 rounded'>Payment Proof</button>

              </div>
            </ul>
            <p className='text-center text-2xl'>⭐⭐⭐⭐⭐</p>
            </div>
            </div>
            </Reveal>
            </SwiperSlide>
{/* Eigth */}
<SwiperSlide>
<Reveal triggerOnce={true}>
        <div className=' bg-slate-950 shadow-lg pb-3 hover:scale-110 rounded-xl'>
            <div className='h-[580px] w-[350px]  ' >
            <img src={Faucet4u} alt=""  className=' w-56 m-auto object-contain shadow-2xl pt-6 shadow-green-600'/>
            <h3 className='text-2xl text-white text-center '>Faucet4u</h3>
            <ul className='text-white list-none text-center'>
              <li className='list-inside flex mx-12' >Claim every 60 minutes</li>
              <li className='list-inside flex mx-12'>1% level bonus</li>
              <li className='list-inside flex mx-12'>Direct withdrawal</li>
              <li className='list-inside flex mx-12'>Faucetpay Withdrawal</li>
              <div className='flex gap-3 justify-center py-4'>
              <button className='py-1 px-3 rounded bg-green-500 hover:bg-green-950'>Get Started</button>
              <button className='py-1 px-3 bg-blue-800 hover:bg-blue-950 rounded'>Payment Proof</button>

              </div>
            </ul>
            <p className='text-center text-2xl'>⭐⭐⭐⭐⭐</p>
            </div>
            </div>
            </Reveal>
            </SwiperSlide>
            {/* Ninth */}
            <SwiperSlide>
            <Reveal triggerOnce={true}>
        <div className=' bg-slate-950 shadow-lg pb-3 hover:scale-110 rounded-xl'>
            <div className='h-[580px] w-[350px]  ' >
            <img src={Claimbits} alt=""  className=' w-56 m-auto object-contain shadow-2xl pt-6 shadow-orange-600'/>
            <h3 className='text-2xl text-white text-center '>Claimbits</h3>
            <ul className='text-white list-none text-center'>
              <li className='list-inside flex mx-12' >Claim every 5 minutes</li>
              <li className='list-inside flex mx-12'>Earn from shortlinks</li>
              <li className='list-inside flex mx-12'>Direct withdrawal</li>
              <li className='list-inside flex mx-12'>Faucetpay Withdrawal</li>
              <div className='flex gap-3 justify-center py-4'>
              <button className='py-1 px-3 rounded bg-green-500 hover:bg-green-950'>Get Started</button>
              <button className='py-1 px-3 bg-blue-800 hover:bg-blue-950 rounded'>Payment Proof</button>

              </div>
            </ul>
            <p className='text-center text-2xl'>⭐⭐⭐⭐⭐</p>
            </div>
            </div>
            </Reveal>
            </SwiperSlide>
            {/* Tenth */}
            <SwiperSlide>
            <Reveal triggerOnce={true}>
        <div className=' bg-slate-950 shadow-lg pb-3 hover:scale-110 rounded-xl'>
            <div className='h-[580px] w-[350px]  ' >
            <img src={Coinpayz} alt=""  className=' w-56 m-auto object-contain shadow-2xl pt-6 shadow-red-600'/>
            <h3 className='text-2xl text-white text-center '>Coinpayz</h3>
            <ul className='text-white list-none text-center'>
              <li className='list-inside flex mx-12' >Claim every 5 minutes</li>
              <li className='list-inside flex mx-12'>Earn from daily check-in</li>
              <li className='list-inside flex mx-12'>Direct withdrawal</li>
              <li className='list-inside flex mx-12'>Faucetpay Withdrawal</li>
              <div className='flex gap-3 justify-center py-4'>
              <button className='py-1 px-3 rounded bg-green-500 hover:bg-green-950'>Get Started</button>
              <button className='py-1 px-3 bg-blue-800 hover:bg-blue-950 rounded'>Payment Proof</button>

              </div>
            </ul>
            <p className='text-center text-2xl'>⭐⭐⭐⭐⭐</p>
            </div>
            </div>
            </Reveal>
            </SwiperSlide>
            {/* Eleventh */}
            <SwiperSlide>
            <Reveal triggerOnce={true}>
        <div className=' bg-slate-950 shadow-lg pb-3 hover:scale-110 rounded-xl'>
            <div className='h-[580px] w-[350px]  ' >
            <img src={BtcAdSpace} alt=""  className=' w-56 m-auto object-contain shadow-2xl pt-6 shadow-blue-600'/>
            <h3 className='text-2xl text-white text-center '>BtcAdSpace</h3>
            <ul className='text-white list-none text-center'>
              <li className='list-inside flex mx-12' >Claim every 16 minutes</li>
              <li className='list-inside flex mx-12'>Earn passive income</li>
              <li className='list-inside flex mx-12'>Direct withdrawal</li>
              <li className='list-inside flex mx-12'>Faucetpay Withdrawal</li>
              <div className='flex gap-3 justify-center py-4'>
              <button className='py-1 px-3 rounded bg-green-500 hover:bg-green-950'>Get Started</button>
              <button className='py-1 px-3 bg-blue-800 hover:bg-blue-950 rounded'>Payment Proof</button>

              </div>
            </ul>
            <p className='text-center text-2xl'>⭐⭐⭐⭐⭐</p>
            </div>
            </div>
            </Reveal>
            </SwiperSlide>
            {/* Twelfth */}
            <SwiperSlide>
            <Reveal triggerOnce={true}>
        <div className=' bg-slate-950 shadow-lg pb-3 hover:scale-110 rounded-xl'>
            <div className='h-[580px] w-[350px]  ' >
            <img src={FaucetCrypto} alt=""  className=' w-56 m-auto object-contain shadow-2xl pt-6 shadow-blue-800'/>
            <h3 className='text-2xl text-white text-center '>FaucetCrypto</h3>
            <ul className='text-white list-none text-center'>
              <li className='list-inside flex mx-12' >Claim every 30 minutes</li>
              <li className='list-inside flex mx-12'>Earn from ads</li>
              <li className='list-inside flex mx-12'>Direct withdrawal</li>
              <li className='list-inside flex mx-12'>Faucetpay Withdrawal</li>
              <div className='flex gap-3 justify-center py-4'>
              <button className='py-1 px-3 rounded bg-green-500 hover:bg-green-950'>Get Started</button>
              <button className='py-1 px-3 bg-blue-800 hover:bg-blue-950 rounded'>Payment Proof</button>

              </div>
            </ul>
            <p className='text-center text-2xl'>⭐⭐⭐⭐⭐</p>
            </div>
            </div>
            </Reveal>
            </SwiperSlide>
            {/* Thirteen */}
            <SwiperSlide>
            <Reveal triggerOnce={true}>
        <div className=' bg-slate-950 shadow-lg pb-3 hover:scale-110 rounded-xl'>
            <div className='h-[580px] w-[350px]  ' >
            <img src={AdBtc} alt=""  className=' w-56 m-auto object-contain shadow-2xl pt-6 shadow-gray-600'/>
            <h3 className='text-2xl text-white text-center '>AdBTC</h3>
            <ul className='text-white list-none text-center'>
              <li className='list-inside flex mx-12' >Claim from ads often</li>
              <li className='list-inside flex mx-12'>Earn Rubbles from shortlinks </li>
              <li className='list-inside flex mx-12'>Direct withdrawal</li>
              <li className='list-inside flex mx-12'>Faucetpay Withdrawal</li>
              <div className='flex gap-3 justify-center py-4'>
              <button className='py-1 px-3 rounded bg-green-500 hover:bg-green-950'>Get Started</button>
              <button className='py-1 px-3 bg-blue-800 hover:bg-blue-950 rounded'>Payment Proof</button>

              </div>
            </ul>
            <p className='text-center text-2xl'>⭐⭐⭐⭐⭐</p>
            </div>
            </div>
            </Reveal>
            </SwiperSlide>
{/* 14th */}
<SwiperSlide>
  <Reveal triggerOnce={true}>
        <div className=' bg-slate-950 shadow-lg pb-3 hover:scale-110 rounded-xl'>
            <div className='h-[580px] w-[350px]  ' >
            <img src={VieFaucet} alt=""  className=' w-56 m-auto object-contain shadow-2xl pt-6 shadow-red-600'/>
            <h3 className='text-2xl text-white text-center '>VieFaucet</h3>
            <ul className='text-white list-none text-center'>
              <li className='list-inside flex mx-12' >Claim every 4 minutes</li>
              <li className='list-inside flex mx-12'>Earn from shortlinks</li>
              <li className='list-inside flex mx-12'>Direct withdrawal</li>
              <li className='list-inside flex mx-12'>Faucetpay Withdrawal</li>
              <div className='flex gap-3 justify-center py-4'>
              <button className='py-1 px-3 rounded bg-green-500 hover:bg-green-950'>Get Started</button>
              <button className='py-1 px-3 bg-blue-800 hover:bg-blue-950 rounded'>Payment Proof</button>

              </div>
            </ul>
            <p className='text-center text-2xl'>⭐⭐⭐⭐⭐</p>
            </div>
            </div>
            </Reveal>
            </SwiperSlide>

            </Swiper>
            </div>
            

    </>
  )
}

export default Faucets