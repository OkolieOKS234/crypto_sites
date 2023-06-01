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
    <div>
  <Tabs>
    <TabList className="bg-blue-700 text-white font-bold font-serif text-2xl">
      <Tab>Faucets</Tab>
      <Tab>Investments</Tab>
      <Tab>Gaming</Tab>
    </TabList>

    <TabPanel>
        <Reveal>
            <div className='flex gap-3 py-3'>
                {/* First Card */}
        <div className='shadow-lg py-3 hover:scale-110'>
            <div >
            <img src={CryptowinImage} alt=""  className=' w-96'/>
            <h3 className='text-2xl '>Cryptowin</h3>
            </div>
            </div>
            {/* Second Card */}
            <div className='shadow-lg py-3 hover:scale-110'>
            <div >
            <img src={EarnCrypto} alt=""  className=' w-96'/>
            <h3 className='text-2xl '>EarnCrypto</h3>
            </div>
            </div>
            {/* Third */}
            <div className='shadow-lg py-3'>
            <div className='hover:scale-110'>
            <img src={CryptoFlare} alt=""  className=' w-96'/>
            <h3 className='text-2xl '>EarnCrypto</h3>
            </div>
            </div>

        </div>
        </Reveal>
     
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>

    </div>
  );
}