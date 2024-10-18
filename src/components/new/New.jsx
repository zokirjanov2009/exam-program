import React from 'react'
import "./New.css"

const Footer = () => {
  return (
    <div className='new'>
      <div className="left">
        <h1>Get notified when I publish new articles</h1>
        <p>Stay up to date with the latest news, announcements, and articles.</p>
      </div>
      <div className="right">
        <label htmlFor="Enter your email"></label>
        <div>
          <input type="Enter your email" placeholder='Enter your email' />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Footer
