import React from 'react'
import "./Online.css"

const Online = () => {
    return (
        <div>
            <div className="Online">
                <div className="online-main">
                    <div className="online-text">
                        <h1>Get 15-Minutes Complimentary <br /> online session.</h1>
                        <p>Limited Period Offer. Claim Now.</p>
                        <button>Book now</button>
                    </div>
                    <div className="online-img">
                        <img src="../../../src/assets/online.png" alt="" width={580} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Online
