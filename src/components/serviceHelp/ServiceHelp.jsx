import React from 'react'
import "./ServiceHelp.css"

const ServiceHelp = () => {
    return (
        <div className='big-div' >
            <div className="help-logo">
                <h1>I can help you in these <br /> particular areas.</h1>
            </div>
            <div className="service-help">
                <div className="help-boxes">
                    <div className="help-box">
                        <img src="../../../src/assets/help-box.svg" alt="" />
                        <h1>Group Coaching Sessions</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna <br /> aliqua minim veniam.
                        </p>
                    </div>
                    <div className="help-box">
                    <img src="../../../src/assets/help-box2.svg" alt="" />
                        <h1>Online course</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna <br /> aliqua minim veniam.
                        </p>
                    </div>
                    <div className="help-box">
                    <img src="../../../src/assets/help-box3.svg" alt="" />
                        <h1>Consultation</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna <br /> aliqua minim veniam.
                        </p>
                    </div>

                    <div className="help-box">
                    <img src="../../../src/assets/help-box2.svg" alt="" />
                        <h1>1:1 Coaching</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna <br /> aliqua minim veniam.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceHelp