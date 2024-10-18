import React from 'react'
import HomeAbout from '../../components/homeAbout/HomeAbout';
import Companies from '../../components/companies/Companies';
import Aboutme from '../../components/aboutme/Aboutme'
import AboutTrans from '../../components/aboutTrans/AboutTrans';
import New from '../../components/new/New';
import Footer from '../../components/footer/Footer';
const About = () => {
  return (
    <div>
      <HomeAbout/>
      <Companies/>
      <Aboutme/>
      <AboutTrans/>
      <New/>
      <Footer/>
    </div>
  )
}

export default About;
