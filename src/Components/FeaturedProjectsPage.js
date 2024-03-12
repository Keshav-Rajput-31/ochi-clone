'use client'
import React from 'react'
import { GoDotFill } from "react-icons/go";

const FeaturedProjectsPage = () => {
  return (
    <>

      <div className='py-10'>


        <div className='text-[3vw] pt-[3%] pb-[2%] px-[3%]'><h1>Featured Projects</h1></div>



        <div className=' flex gap-5 px-[2%] py-[2%] border-t-2 border-zinc-300 h-screen w-full'>


          <div className='h-[80vh] w-1/2 relative'>

            <div className='text-[10vw] uppercase font-[FoundersGrotesk] text-[#cdea68] leading-none w-fit absolute left-[100%] top-[50%] translate-x-[-50%]'>
              {
                "FYDE".split('').map((item, index) => <span>{item}</span>)
              }
            </div>

            <div className='uppercase text-xl p-5 flex items-center gap-2'> <GoDotFill /> <h1>fyde</h1></div>

            <div className='bg-[url("https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png")] bg-cover bg-center bg-no-repeat h-full w-full rounded-xl'></div>

            <div className='py-5 px-3 flex gap-5'>

              {
                ['audit', 'copy writing', 'sales deck', 'slide design'].map((item, index) => {

                  return <button className='border-2 border-zinc-800  text-lg uppercase leading-none py-[.5em] px-3 rounded-full'>{item}</button>


                })
              }

            </div>

          </div>

          <div className="h-[80vh] w-1/2 relative">

            <div className='text-[10vw] uppercase font-[FoundersGrotesk] text-[#cdea68] leading-none w-fit absolute right-[100%] top-[50%] translate-x-[50%]'>
              {
                "VISE".split('').map((item, index) => <span>{item}</span>)
              }
            </div>

            <div className='uppercase text-xl p-5 flex items-center gap-2'> <GoDotFill /> <h1>vise</h1></div>

            <div className=' bg-[url("https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg")] bg-cover bg-center bg-no-repeat  h-full w-full rounded-xl'></div>

            <div className='py-5 px-3 flex gap-5'>

              {
                ['agency', 'company presentation'].map((item, index) => {

                  return <button className='border-2 border-zinc-800  text-lg uppercase leading-none py-[.5em] px-3 rounded-full'>{item}</button>


                })
              }

            </div>

          </div>


        </div>


      </div>

    </>
  )
}

export default FeaturedProjectsPage