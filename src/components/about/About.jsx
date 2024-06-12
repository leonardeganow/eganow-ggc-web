import React from 'react'
// import Header from '../header/Header'
import Navbar from '../Navbar/Navbar'
// import Hero from '../hero/hero'
import Footer from '../footer/Footer'
import Scrollbar from '../scrollbar/scrollbar'
// import MissionVission from '../MissionVission/MissionVission'
import AboutContent from './AboutContent'
import AboutHero from './AboutHero'
import AboutFaq from './AboutFaq'

const About = () => {
  return (
    <div>
      <Navbar  hclass={"wpo-header-style-4"}/>
      <AboutHero/>
      <AboutContent/>
      <AboutFaq/>
      <Footer />
      <Scrollbar />
    </div>
  )
}

export default About