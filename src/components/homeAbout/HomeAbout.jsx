import React from 'react'
import "./HomeAbout.css"

const HomeAbout = () => {
    return (
        <div>
            <div className="about-home">
                <div className="homeAbout-text">
                    <p>Proven strategies backed by science for success.</p>
                    <h1>About me</h1>
                    <p>I help people to discover their true potential and live a fulfilling <br /> life...
                    Discover the simple 3 steps that I discovered to hack <br /> productivity. It just works and it is begin using backed by science. <br /> Wanna transform your life?</p>
                    <button>Get your free guide now</button>
                </div>
                <div className="homeAbout-img">
                    <img src="../../../src/assets/home.png" alt="" width={460} />
                </div>
            </div>
        </div>
    )
}

export default HomeAbout
