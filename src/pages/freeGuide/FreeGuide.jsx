import React from 'react'
import "./FreeGuide.css"
import HomeFree from '../../components/homeFree/HomeFree'
import Testimonials from '../../components/testimonials/Testimonials'
import FreeCards from '../../components/freeCards/FreeCards'
import FreeTransform from '../../components/freeTransform/FreeTransform'
import New from "../../components/new/New"
import Footer from '../../components/footer/footer'
const FreeGuide = () => {
  return (
    <div>
      <HomeFree />
      <Testimonials/>
      <FreeCards/>
      <FreeTransform/>
      <New/>
      <Footer/>
    </div>
  )
}

export default FreeGuide
