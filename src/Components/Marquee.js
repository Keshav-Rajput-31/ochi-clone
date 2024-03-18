'use client'
import { motion } from 'framer-motion'
import React from 'react'
import Marquee from 'react-fast-marquee'
const Marqueee = () => {
  return (

    <>


    <div data-scroll data-scroll-speed="-0.4" data-scroll-section className='py-28 bg-[#004d43] overflow-hidden rounded-t-3xl'> 
        <div className='flex gap-10 text-white border-t-2 border-b-2 border-zinc-400 text-[20em] font-bold font-[FoundersGrotesk] uppercase leading-none whitespace-nowrap'>
          
          <Marquee speed={170}>

          <h1 className='px-5 overflow-hidden'>we are ochi</h1>
          <h1 className='px-5 overflow-hidden'>we are ochi</h1>

          </Marquee>

          </div>
    </div>
    
    </>
  )
}

export default Marqueee 