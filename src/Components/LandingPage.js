'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { GoArrowUpRight } from "react-icons/go";

const Forground = () => {
  return (
    <div data-scroll data-scroll-speed={-0.7} data-scroll-section className='w-screen h-screen'>
        
        <div className='relative top-[20%] left-[5%] font-[FoundersGrotesk] leading-[7em] tracking-tighter text-zinc-800'>

          <div className='text-[10em] font-bold uppercase '>

            <h1>we create</h1>
            
          </div>
          <div className='text-[10em] font-bold uppercase flex '>

            <motion.div initial = {{width:"0"}} animate ={{width:"9vw"}} transition={{ease:[0.87, 0, 0.13, 1] , duration:1 , delay:1}} className='bg-red-500 w-[9vw] h-[12vh] relative top-3 rounded-lg mr-[.5vw]' ></motion.div>

          <h1>eye-opening</h1>

          </div>
          <div className='text-[10em] font-bold uppercase '>

          <h1>presentations</h1>

          </div>
            
            
        </div>
        <div className='relative top-[35%]'><hr />

        <div className='flex justify-between px-20 text-lg py-5'>

          <h1>For public and private companies</h1>
          <h1>From the first pitch to IPO</h1>

          <div className='flex justify-center items-center gap-2'>

          <h1 className='border-2 border-black p-2 rounded-full cursor-pointer'>START THE PROJECT </h1>
          <div className='border-2 border-black p-2 rounded-full cursor-pointer'><GoArrowUpRight size={'1.5em'}/></div>
          </div>

          

        </div> 
          <div className='text-center text-gray-400 text-xl mt-16'><h1>Scroll Down</h1></div>

        </div>
        
    </div>
  )
}

export default Forground