import React, { useEffect, useState } from 'react'

const PlayEyes = () => {


    const [Rotate , setRotate] = useState("0") 
    
    useEffect((e)=>{

        window.addEventListener("mousemove" ,(e)=>{

            let mouseX = e.clientX
            let mouseY = e.clientY

            let deltaX = mouseX - window.innerWidth/2
            let deltaY = mouseY - window.innerHeight/2

            let angel = Math.atan2(deltaY , deltaX) * 180/Math.PI

            setRotate(angel-180);


        })

    })
    



    return (
        <>

            <div className='main w-full h-screen overflow-hidden'>
                <div data-scroll data-scroll-speed = "-0.8" data-scroll-section className='relative h-full w-full bg-cover bg-center bg-no-repeat bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>

                    <div className='eyeCont absolute flex gap-16 justify-center items-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>

                        <div className='flex items-center justify-center bg-zinc-100 w-[15vw] h-[15vw] rounded-full'>

                            <div className='bg-zinc-900 w-[10vw] h-[10vw] rounded-full overflow-hidden flex justify-center items-center relative'>

                                <h1 className='uppercase text-zinc-100 text-2xl'>play</h1>

                                <div className='flex justify-center items-center w-full h-full absolute'>

                                    <div className='line w-full px-1' style={{transform: `rotate(${Rotate}deg)`}}>
                                        <div className='bg-zinc-100 w-[1.5em] h-[1.5em] rounded-full'></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='flex items-center justify-center bg-zinc-100 w-[15vw] h-[15vw] rounded-full'>
                            <div className='bg-zinc-900 w-[10vw] h-[10vw] rounded-full flex items-center justify-center overflow-hidden relative'>
                                <h1 className='uppercase text-zinc-100 text-2xl'>play</h1>

                                <div className='absolute flex justify-center items-center w-full h-full'>
                                    <div className=' line w-full px-1' style={{transform: `rotate(${Rotate}deg)`}}>
                                        <div className='bg-zinc-100 w-[1.5em] h-[1.5em] rounded-full' ></div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default PlayEyes