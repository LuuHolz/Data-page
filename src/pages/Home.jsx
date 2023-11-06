import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'
import SectionFour from '../components/SectionFour'
import SectionFive from '../components/SectionFive'

function Home() {
  return (
    <div>
        <Navbar/>

        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>

        <Footer/>
    </div>
  )
}

export default Home
