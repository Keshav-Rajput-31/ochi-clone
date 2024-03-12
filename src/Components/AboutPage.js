'use client'
import React from 'react'
import { GoDotFill } from "react-icons/go";


const AboutPage = () => {
  return (
    <>

      <div className='bg-[#cdea68] rounded-t-3xl '>
        <div className='py-[5%] pr-[20%] pl-[4%]'>
          <h1 className='text-[3.5vw] font-[NeueMontreal] leading-none'>Ochi is a strategic partner for fast-growing tech businesses that need to <span>raise funds</span>, <span>sell products</span> ,<span> explain complex ideas</span>, <span> and hire great people.</span></h1>

        </div>

        <div className='border-t-[1px] border-b-[1px] border-zinc-600 flex  justify-between py-5 pr-[15%] pl-[5%] text-xl'>

          <div className='mr-[10%]'>
            <h1>What you can expect:</h1>
          </div>

          <div className='flex flex-col w-1/5 gap-10'>
            <p>
              We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>

            <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
          </div>

          <div className='flex flex-col'>
            <h1 className='pb-5'>S:</h1>
            <span>Instagram</span>
            <span>Behance</span>
            <span>Facebook</span>
            <span>Linkedin</span>
          </div>

        </div>


        <div className='py-5 px-10 flex justify-between'>

          <div className=''>
            <h1 className='text-6xl mb-5'>Our approach:</h1>
            <button className='bg-zinc-900 text-white py-5 px-8 rounded-full text-xl flex justify-between items-center gap-5  '>READ MORE <GoDotFill /> </button>
          </div>

          <div className='image-cont'>

            <div className='h-[70vh] w-[50vw] rounded-xl bg-red-500'></div>

          </div>

        </div>


      </div>



    </>
  )
}

export default AboutPage