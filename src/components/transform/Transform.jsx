import React from 'react'
import "./Transform.css"

const Transform = () => {
    return (
        <div>
            <div className="Transform">
                <div className="transform-text">
                    <p>How does it work?</p>
                    <h1>Are you ready to <br /> transform your life?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua minim veniam.
                    </p>
                </div>
                <div className="transform-img">
                    <div className="transform-img-text">
                        <div className="trans-card">
                            <img src="../../../src/assets/icon1.svg" alt="" />
                            <div className="lorem">
                                <h2>Talk to me first</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                        <div className="trans-card">
                            <img src="../../../src/assets/icon2.svg" alt="" />
                            <div className="lorem">
                                <h2>Schedule a meeting</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt.</p>
                            </div>
                        </div><div className="trans-card">
                            <img src="../../../src/assets/icon3.svg" alt="" />
                            <div className="lorem">
                                <h2>Online consultation</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt.</p>
                            </div>
                        </div><div className="trans-card">
                            <img src="../../../src/assets/icon4.svg" alt="" />
                            <div className="lorem">
                                <h2>Ready to start? Let’s talk!</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                    </div>
                    <div className="trans-img">
                        <img src="../../../src/assets/trans-img.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transform
