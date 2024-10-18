import React from 'react'
import "./HomeMain.css"
const HomeMain = () => {
  return (
    <div className='home'>
      <img className='vectorr' src="../../../src/assets/vector.svg" alt="" />
      <div className="home-main">
        <div className="home-text">
          <h1>Live life at the <br /> full potential</h1>
          <p>I help people to discover their true potential and live a fulfilling <br /> life...
            Discover the simple 3 steps that I discovered to hack <br />productivity. It just works and it is begin using backed by science. <br /> Wanna transform your life?</p>
          <button>Get your free guide now</button>
        </div>
        <div className="home-img">
          <img src="../../../src/assets/home-image.png" alt="" width={460} />
        </div>
      </div>
    </div>
  )
}

export default HomeMain
