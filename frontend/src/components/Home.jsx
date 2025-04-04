import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CatagoryCarousel from './CatagoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './Footer'
import useGetAllJobs from './hooks/useGetAllJobs'
function Home() {
  useGetAllJobs();
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <CatagoryCarousel/>
      <LatestJobs/>
      <Footer/>
    </div>
  )
}

export default Home