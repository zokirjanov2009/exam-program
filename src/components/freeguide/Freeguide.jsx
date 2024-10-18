import React from 'react'
import "./Freeguide.css"

const Freeguide = () => {
    return (
        <div>
            <div className="Free-guide">
                <div className="free-text">
                    <h1>Don’t miss out on my <br /> ‘Live life at the full <br /> potential’ free guide</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore <br /> et dolore magna aliqua minim veniam.
                        <br />
                        <br />
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br /> accusantium doloremque laudantium, totam rem aperiam, eaque ipsa <br /> quae ab illo inventore veritatis et quasi architecto beatae vitae dicta <br /> sunt explicabo. </p>
                        <button>Get your free guide now</button>
                </div>
                <div className="free-img">

                    <img src="../../../src/assets/free.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Freeguide
