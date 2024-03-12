'use client'
import React from 'react'
import { GoDotFill } from "react-icons/go";


const ReadyToStartPage = () => {
  return (
    <>

        <div className='bg-[#cdea68] py-[10%] '>
          <div className='uppercase text-[15vw] flex flex-col items-center leading-[.7em] text-zinc-800 font-[FoundersGrotesk]' >
            <h1>ready</h1>
            <h1>to start</h1>
            <h1>the project</h1>
          </div>

          <div className='uppercase flex flex-col justify-center items-center gap-2 mt-5 font-[NeueMontreal]'>

            <button className='bg-zinc-900 text-white py-5 px-10 rounded-full text-lg'>start the project</button>
            <h1 className='text-2xl'>or</h1>
            <button className='py-5 px-10 rounded-full text-lg border-2 border-zinc-900'>hello@ochi.design</button>


          </div>
        </div>
    
    </>
  )
}

export default ReadyToStartPage