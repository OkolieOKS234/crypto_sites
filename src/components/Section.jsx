import React from 'react'
import PublicIcon from '@mui/icons-material/Public';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

const Section = () => {
  return (
    <div className='features bg-[#0D0D2B] py-4 flex lg:flex-nowrap md:flex-wrap sm:flex-wrap gap-12 justify-center'>
       {/* FIRST */}
       <div className='flex text-white text-center items-center'>
        <div className='bg-[#FFFFFF1A] rounded-3xl py-4 px-4 '>
          <PublicIcon/> 
        </div>
        <div className='flex flex-col'>
         <h3 className='hero_header header_text font-extrabold text-2xl'>WORDWIDE</h3> 
          <p className='text-sm'>All countries supported</p>
          </div>
</div>
{/* SECOND */}
<div className='flex text-white text-center items-center px-2'>
  <div className='bg-[#FFFFFF1A] rounded-3xl py-4 px-4 '>
<AccountBalanceWalletIcon/>
  </div>
  <div>
    <h3 className='hero_header header_text font-extrabold text-2xl'>10+ Wallets</h3>
    <p className='text-sm'>several wallets supported</p>
  </div>
</div>
{/* THIRD */}
<div className='flex text-white text-center items-center  px-2'>
  <div className='bg-[#FFFFFF1A] rounded-3xl py-4 px-4 '>
<CurrencyExchangeIcon/>
  </div>
  <div>
    <h3 className='hero_header header_text font-extrabold text-2xl'> 20+Exchanges</h3>
    <p className='text-sm'>several exchanges supported</p>
  </div>
</div>

      </div>
  )
}

export default Section