import React from 'react'
import Illustration from "../assets/Illustration.png"
import "animate.css"
import { Fade, Bounce } from "react-awesome-reveal";

const Hero = () => {
  return (
    <section className='bg-[#0D0D2B]'>
        <div className="container flex  lg:py-12 sm:py-1 md:py-1 hero_header ">
            <div className='sm:px-7 lg:px-24 md:px-12 hero_header '>
                <Bounce triggerOnce={true}>
                <h3 className='hero_header animate__backInDown text-3xl font-bold pt-24 text-left  text-white font-serif'>EARN CRYPTO EASILY WITH OUR LIST OF CAREFULLY CURATED SITES </h3>
<p className=' text-white text-sm md:max-w-lg'>Earn and withdraw crypto in over 10 different cryptocurrencies of your choice</p>
            <button className='text-white bg-blue-600 rounded-lg px-3 py-1'>Explore now</button>
                </Bounce>
                
            </div>
            <div>
                <Fade triggerOnce={true}>
                <img src={Illustration} alt=""  className='w-[1000px] '/>
                </Fade>
            
            </div>
            
              
 
                </div>
    </section>
  )
}

export default Hero