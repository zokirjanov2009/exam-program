import React from 'react'
import "./HomeFree.css"

const HomeFree = () => {
    return (
        <div>
            <div className="result">
                <div className="result-text">
                    <h1>Results that speak for <br /> themselves</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua minim veniam.
                    </p>
                    <div className="result-inp">
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='Enter your email' />
                        <button>Get free guide</button>
                    </div>
                </div>
                <div className="result-img">
                    <img src="../../../src/assets/result.png" alt="" />

                </div>
            </div>
        </div>
    )
}

export default HomeFree
