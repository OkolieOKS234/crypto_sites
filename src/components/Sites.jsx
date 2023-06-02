import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CryptowinImage from "../assets/cryptowin.png"
import EarnCrypto from "../assets/earncrypto.png"
import CryptoFlare from "../assets/cryptoflare.png"
// import Coinpayu from "../assets/coinpayu.png"
import {Bounce, Reveal } from "react-awesome-reveal";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';






export default function Sites() {
  

  return (
    <div className='bg-[#0D0D2B]'>
  <Tabs>
    <TabList className="tab text-white font-bold font-serif text-2xl">
      <Tab>Faucets</Tab>
      <Tab>Investments</Tab>
      <Tab>Gaming</Tab>
      <Tab>Airdrops</Tab>
      <Tab>Exchanges</Tab>
      <Tab>Tutorials</Tab>
    </TabList>

    <TabPanel>
      
            <div className='mx-9 sites flex flex-wrap gap-6 py-12'>
                {/* First Card */}
                <Reveal triggerOnce={true}>
        <div className=' bg-slate-950 shadow-lg pb-3 hover:scale-105'>
            <div >
            <img src={CryptowinImage} alt=""  className=' w-96'/>
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
            <p className='text-center text-3xl'>⭐⭐⭐⭐⭐</p>
            </div>
            </div>
            </Reveal>
            {/* Second Card */}
            <Reveal triggerOnce={true}>
            <div className='bg-slate-950 shadow-lg pb-3 hover:scale-105'>
            <div >
            <img src={EarnCrypto} alt=""  className=' w-96'/>
            <h3 className='text-2xl text-white text-center'>EarnCrypto</h3>
            <ul className='text-white list-none text-center'>
              <li className='list-inside flex mx-12' >Claim every 0 minutes</li>
              <li className='list-inside flex mx-12'>Earn from shortlinks</li>
              <li className='list-inside flex mx-12'>Direct withdrawal</li>
              <li className='list-inside flex mx-12'>Faucetpay Withdrawal</li>
              <div className='flex gap-3 justify-center py-4'>
              <button className='py-1 px-3 rounded bg-green-500 hover:bg-green-950'>Get Started</button>
              <button className='py-1 px-3 bg-blue-800 hover:bg-blue-950 rounded'>Payment Proof</button>
             
              </div>
            </ul>
            <p className='text-center text-3xl py-4'>⭐⭐⭐⭐⭐</p>
            </div>
            </div>
            </Reveal>
            {/* Third */}
            <Reveal triggerOnce={true}>
            <div className='bg-slate-950 shadow-lg pb-3 hover:scale-105'>
            <div>
            <img src={CryptoFlare} alt=""  className=' w-96'/>
            <h3 className='text-2xl text-center text-white '>Cryptoflare</h3>
            <ul className='text-white list-none text-center'>
              <li className='list-inside flex mx-12' >Claim every 0 minutes</li>
              <li className='list-inside flex mx-12'>Earn from shortlinks</li>
              <li className='list-inside flex mx-12'>Direct withdrawal</li>
              <li className='list-inside flex mx-12'>Faucetpay Withdrawal</li>
              <div className='flex gap-3 justify-center py-4'>
              <button className='py-1 px-3 rounded bg-green-500 hover:bg-green-950'>Get Started</button>
              <button className='py-1 px-3 bg-blue-800 hover:bg-blue-950 rounded'>Payment Proof</button>
             
              </div>
            </ul>
            <p className='text-center text-3xl'>⭐⭐⭐⭐⭐</p>
            </div>
            </div>
            </Reveal>
{/* Fourth */}
<Reveal triggerOnce={true}>
            <div className='bg-slate-950 shadow-lg pb-3 hover:scale-105'>
            <div>
            <img src={CryptoFlare} alt=""  className=' w-96'/>
            <h3 className='text-2xl text-center text-white '>Cryptoflare</h3>
            <ul className='text-white list-none text-center'>
              <li className='list-inside flex mx-12' >Claim every 0 minutes</li>
              <li className='list-inside flex mx-12'>Earn from shortlinks</li>
              <li className='list-inside flex mx-12'>Direct withdrawal</li>
              <li className='list-inside flex mx-12'>Faucetpay Withdrawal</li>
              <div className='flex gap-3 justify-center py-4'>
              <button className='py-1 px-3 rounded bg-green-500 hover:bg-green-950'>Get Started</button>
              <button className='py-1 px-3 bg-blue-800 hover:bg-blue-950 rounded'>Payment Proof</button>
             
              </div>
            </ul>
            <p className='text-center text-3xl'>⭐⭐⭐⭐⭐</p>
            </div>
            </div>
            </Reveal>



        </div>
        
    </TabPanel>
   
    <TabPanel>
      <h2> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi aperiam odit rem. Recusandae, quo ab ipsam at velit earum quasi eveniet nostrum fuga atque alias laboriosam reprehenderit optio veniam quae.</h2>
    </TabPanel>

    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Airdrops</h2>
    </TabPanel>
    <TabPanel>
      <h2>Exchanges</h2>
    </TabPanel>
    <TabPanel>
      <h2>Tutorials</h2>
    </TabPanel>
  </Tabs>

    </div>
  );
}