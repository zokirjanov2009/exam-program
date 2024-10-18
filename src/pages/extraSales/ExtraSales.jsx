import React from 'react'
import "./ExtraSales.css"
import HomeExtra from '../../components/homeExtra/HomeExtra'
import AboutTrans from "../../components/aboutTrans/AboutTrans"
import FreeTransform from "../../components/freeTransform/FreeTransform"
import Testimonials from "../../components/testimonials/Testimonials"
import FreeCards from "../../components/freeCards/FreeCards"
import Online from "../../components/online/Online"
import Guarente from "../../components/guarente/Guearente"
import New from "../../components/new/New"
import Foooter from "../../components/footer/Footer"

const ExtraSales = () => {
  return (
    <div>
      <HomeExtra/>
      <AboutTrans/>
      <FreeTransform/>
      <Testimonials/>
      <FreeCards/>
      <Online/>
      <Guarente/>
      <New/>
      <Foooter/>
    </div>
  )
}

export default ExtraSales
