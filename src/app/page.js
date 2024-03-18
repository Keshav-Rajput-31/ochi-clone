'use client'
import React from 'react' 
import LandingPage from '@/Components/LandingPage'
import Marquee from '@/Components/Marquee'
import AboutPage from '@/Components/AboutPage'
import ReadyToStartPage from '@/Components/ReadyToStartPage'
import FeaturedProjectsPage from '@/Components/FeaturedProjectsPage'
import PlayEyes from '@/Components/PlayEyes'
import Footer from '@/Components/Footer'

import LocomotiveScroll from 'locomotive-scroll';



const page = () => {
  const locomotiveScroll = new LocomotiveScroll();
 
  return (
    <div>


      
      <LandingPage/>
      <Marquee/>
      <AboutPage/>
      <PlayEyes/>
      <FeaturedProjectsPage/>
      <ReadyToStartPage/>
      <Footer/>




    </div>
  )
}

export default page