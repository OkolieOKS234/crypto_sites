import React from 'react'
import Illustration from "../assets/Illustration.png"
import "animate.css"
import { Fade, Bounce, Roll, JackInTheBox } from "react-awesome-reveal";

const Hero = () => {
  return (
    <section className='bg-[#0D0D2B] px-7'>
        <div className="container flex  lg:py-12 sm:py-1 md:py-1  hero_header ">
            <div className='sm:px-7 lg:px-24 md:px-12 hero_header '>
                <Roll triggerOnce={true}>
                <h3 className='hero_header header_text animate__backInDown text-3xl font-bold pt-24 text-left  text-white'>EARN CRYPTO EASILY WITH OUR LIST OF CAREFULLY CURATED SITES </h3>
<p className=' text-white text-sm md:max-w-sm py-2'>Earn and withdraw crypto in over 10 different cryptocurrencies, Join the party.</p>
            <button className='text-white bg-blue-600 rounded-lg px-3 py-1 hover:bg-blue-950'>Explore now</button>
                </Roll>  
            </div>
            <div>
                <JackInTheBox triggerOnce={true}>
                <img src={Illustration} alt=""  className='w-[1000px] '/>
                </JackInTheBox>
            
            </div>
            
              
 
                </div>
    </section>
  )
}

export default Hero