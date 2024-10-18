import React from 'react'
import "./Services.css"
import HomeServices from '../../components/homeServices/HomeServices' 
import ServiceHelp from '../../components/serviceHelp/ServiceHelp'
import Transform from '../../components/transform/Transform'
import New from "../../components/new/New"
import Footer from "../../components/footer/Footer"

const Services = () => {
  return (
    <div>
        <HomeServices/>
        <ServiceHelp/>
        <Transform/>
        <New/>
        <Footer/>
    </div>
  )
}

export default Services
