import React from 'react'
import "./FreeTransform.css"

const FreeTransform = () => {
    return (
        <div>
            <div className="free-trans">
                <div className="freetrans-text">
                    <div className="trans-text">
                        <p>How does it work?</p>
                        <h1>Are you ready to <br /> transform your life?</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua minim veniam.</p>
                    </div>
                    <div className="trans-cards">
                        <div className="freetrans-card">
                            <img src="../../../src/assets/icon3.svg" alt="" />
                            <div className="lorem">
                                <h2>Online consultation</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                        <div className="freetrans-card">
                            <img src="../../../src/assets/icon4.svg" alt="" />
                            <div className="lorem">
                                <h2>Ready to start? Let’s talk!</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="freetrans-img">
                    <div className="ft-img">
                        <img src="../../../src/assets/trans-video.png" alt="" width={900} height={550} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FreeTransform
