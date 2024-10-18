import React from 'react'
import "./Home.css"
import HomeMain from '../../components/homeMain/HomeMain'
import Help from '../../components/help/Help'
import Aboutme from '../../components/aboutme/Aboutme'
import Blog from '../../components/blog/Blog'
import Freeguide from '../../components/freeguide/Freeguide'
import Online from '../../components/online/Online'
import New from "../../components/new/New"
import Footer from '../../components/footer/Footer'

const Home = () => {
    return (
        <div className='home'>
            <HomeMain />
            <Help/>
            <Aboutme/>
            <Blog/>
            <Freeguide/>
            <Online/>
            <New />
            <Footer/>
        </div>
    )
}

export default Home
