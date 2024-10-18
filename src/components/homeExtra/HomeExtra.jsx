import React from 'react'
import "./HomeExtra.css"

const HomeExtra = () => {
    return (
        <div>
            <div className="extra-home">
                <img className='vectorr2' src="../../../src/assets/vector.svg" alt="" />
                <div className="extra-main">
                    <div className="extra-text">
                        <h1>Self Esteem <br /> Therapy</h1>
                        <p>I help people to discover their true potential and live a fulfilling <br /> life...
                            Discover the simple 3 steps that I discovered to hack <br />productivity. It just works and it is begin using backed by science. <br /> Wanna transform your life?</p>
                        <button>Claim your sport</button>
                    </div>
                    <div className="home-img">
                        <img src="../../../src/assets/extra.png" alt="" width={460} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeExtra
