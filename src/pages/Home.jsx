import React from 'react'
import Navbar from '../components/Navbar'
import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'

function Home() {
  return (
    <div>
        <Navbar/>

        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
    </div>
  )
}

export default Home
