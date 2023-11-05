import React from 'react'
import Navbar from '../components/Navbar'
import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'
import SectionFour from '../components/SectionFour'

function Home() {
  return (
    <div>
        <Navbar/>

        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
    </div>
  )
}

export default Home
