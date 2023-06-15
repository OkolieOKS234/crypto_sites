import React from 'react'
import {Reveal } from "react-awesome-reveal";
import Cryptoflare from "../assets/sites/cryptoflare.jpg"
import Coinpayu from "../assets/sites/coinpayu.jpg"
import Earnviv from "../assets/sites/earnviv.jpg"
import EarnBitMoon from "../assets/sites/viefaucet.jpg"

const Faucets = () => {
  return (
    <>
<div className='mx-9 sites flex flex-wrap gap-4 py-3'>
                {/* First Card */}
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

            
{/* Second */}
<Reveal triggerOnce={true}>
        <div className=' bg-slate-950 shadow-lg pb-3 hover:scale-110 rounded-xl'>
            <div className='h-[580px] w-[350px]  ' >
            <img src={Cryptoflare} alt=""  className=' w-56 m-auto object-contain shadow-2xl shadow-red-600 pt-6'/>
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
{/* Third */}
<Reveal triggerOnce={true}>
        <div className=' bg-slate-950 shadow-lg pb-3 hover:scale-110 rounded-xl'>
            <div className='h-[580px] w-[350px]  ' >
            <img src={Earnviv} alt=""  className=' w-56 m-auto object-contain shadow-2xl shadow-red-600 pt-6'/>
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
            {/* fOURTH */}
            <Reveal triggerOnce={true}>
        <div className=' bg-slate-950 shadow-lg pb-3 hover:scale-110 rounded-xl'>
            <div className='h-[580px] w-[350px]  ' >
            <img src={EarnBitMoon} alt=""  className=' w-56 m-auto object-contain shadow-2xl pt-6 shadow-red-600'/>
            <h3 className='text-2xl text-white text-center '>Viefaucet</h3>
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
{/* Fifth */}
<Reveal triggerOnce={true}>
        <div className=' bg-slate-950 shadow-lg pb-3 hover:scale-110 rounded-xl'>
            <div className='h-[580px] w-[350px]'>
            <img src={Coinpayu} alt=""  className=' w-56 m-auto object-contain shadow-2xl pt-6'/>
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
{/* Sixth */}
<Reveal triggerOnce={true}>
        <div className=' bg-slate-950 shadow-lg pb-3 hover:scale-110 rounded-xl'>
            <div className='h-[580px] w-[350px]  ' >
            <img src={Coinpayu} alt=""  className=' w-56 m-auto object-contain shadow-2xl pt-6'/>
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

            {/* Seventh */}
            <Reveal triggerOnce={true}>
        <div className=' bg-slate-950 shadow-lg pb-3 hover:scale-110 rounded-xl'>
            <div className='h-[580px] w-[350px]  ' >
            <img src={EarnBitMoon} alt=""  className=' w-56 m-auto object-contain shadow-2xl pt-6 shadow-red-600'/>
            <h3 className='text-2xl text-white text-center '>Earnbitmoon</h3>
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
{/* Eigth */}
<Reveal triggerOnce={true}>
        <div className=' bg-slate-950 shadow-lg pb-3 hover:scale-110 rounded-xl'>
            <div className='h-[580px] w-[350px]  ' >
            <img src={EarnBitMoon} alt=""  className=' w-56 m-auto object-contain shadow-2xl pt-6 shadow-red-600'/>
            <h3 className='text-2xl text-white text-center '>Earnbitmoon</h3>
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

            {/* Ninth */}
            <Reveal triggerOnce={true}>
        <div className=' bg-slate-950 shadow-lg pb-3 hover:scale-110 rounded-xl'>
            <div className='h-[580px] w-[350px]  ' >
            <img src={EarnBitMoon} alt=""  className=' w-56 m-auto object-contain shadow-2xl pt-6 shadow-red-600'/>
            <h3 className='text-2xl text-white text-center '>Earnbitmoon</h3>
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

            {/* Tenth */}
            <Reveal triggerOnce={true}>
        <div className=' bg-slate-950 shadow-lg pb-3 hover:scale-110 rounded-xl'>
            <div className='h-[580px] w-[350px]  ' >
            <img src={EarnBitMoon} alt=""  className=' w-56 m-auto object-contain shadow-2xl pt-6 shadow-red-600'/>
            <h3 className='text-2xl text-white text-center '>Earnbitmoon</h3>
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

            {/* Eleventh */}
            <Reveal triggerOnce={true}>
        <div className=' bg-slate-950 shadow-lg pb-3 hover:scale-110 rounded-xl'>
            <div className='h-[580px] w-[350px]  ' >
            <img src={EarnBitMoon} alt=""  className=' w-56 m-auto object-contain shadow-2xl pt-6 shadow-red-600'/>
            <h3 className='text-2xl text-white text-center '>Earnbitmoon</h3>
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

            {/* Twelfth */}
            <Reveal triggerOnce={true}>
        <div className=' bg-slate-950 shadow-lg pb-3 hover:scale-110 rounded-xl'>
            <div className='h-[580px] w-[350px]  ' >
            <img src={EarnBitMoon} alt=""  className=' w-56 m-auto object-contain shadow-2xl pt-6 shadow-red-600'/>
            <h3 className='text-2xl text-white text-center '>Earnbitmoon</h3>
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

            {/* Thirteen */}
            <Reveal triggerOnce={true}>
        <div className=' bg-slate-950 shadow-lg pb-3 hover:scale-110 rounded-xl'>
            <div className='h-[580px] w-[350px]  ' >
            <img src={EarnBitMoon} alt=""  className=' w-56 m-auto object-contain shadow-2xl pt-6 shadow-red-600'/>
            <h3 className='text-2xl text-white text-center '>Earnbitmoon</h3>
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
{/* 14th */}
<Reveal triggerOnce={true}>
        <div className=' bg-slate-950 shadow-lg pb-3 hover:scale-110 rounded-xl'>
            <div className='h-[580px] w-[350px]  ' >
            <img src={EarnBitMoon} alt=""  className=' w-56 m-auto object-contain shadow-2xl pt-6 shadow-red-600'/>
            <h3 className='text-2xl text-white text-center '>Earnbitmoon</h3>
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

            </div>

    </>
  )
}

export default Faucets