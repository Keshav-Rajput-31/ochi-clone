'use client'
import React from 'react' 
import LandingPage from '@/Components/LandingPage'
import Marquee from '@/Components/Marquee'
import AboutPage from '@/Components/AboutPage'
import ReadyToStartPage from '@/Components/ReadyToStartPage'
import FeaturedProjectsPage from '@/Components/FeaturedProjectsPage'
import PlayEyes from '@/Components/PlayEyes'
import Footer from '@/Components/Footer'

const page = () => {
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