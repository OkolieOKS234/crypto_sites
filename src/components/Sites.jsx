import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CryptowinImage from "../assets/cryptowin.png"
import EarnCrypto from "../assets/earncrypto.png"
import CryptoFlare from "../assets/cryptoflare.png"
import {Bounce, Reveal } from "react-awesome-reveal";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';






export default function Sites() {
  

  return (
    <div className='bg-[#0D0D2B] '>
  <Tabs>
    <TabList className="bg-[#0D0D2B]  text-white font-bold font-serif text-2xl">
      <Tab>Faucets</Tab>
      <Tab>Investments</Tab>
      <Tab>Gaming</Tab>
    </TabList>

    <TabPanel>
      
            <div className=' sites flex gap-6 py-3'>
                {/* First Card */}
                <Reveal>
        <div className=' bg-slate-950 shadow-lg pb-3 hover:scale-110'>
            <div >
            <img src={CryptowinImage} alt=""  className=' w-96'/>
            <h3 className='text-2xl text-white text-center '>Cryptowin</h3>
            </div>
            </div>
            </Reveal>
            {/* Second Card */}
            <Reveal>
            <div className='bg-slate-950 shadow-lg pb-3 hover:scale-110'>
            <div >
            <img src={EarnCrypto} alt=""  className=' w-96'/>
            <h3 className='text-2xl text-white text-center'>EarnCrypto</h3>
            </div>
            </div>
            </Reveal>
            {/* Third */}
            <Reveal>
            <div className='bg-slate-950 shadow-lg pb-3 hover:scale-110'>
            <div>
            <img src={CryptoFlare} alt=""  className=' w-96'/>
            <h3 className='text-2xl text-center text-white '>Cryptoflare</h3>
            </div>
            </div>
            </Reveal>

        </div>
        
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>

    </div>
  );
}