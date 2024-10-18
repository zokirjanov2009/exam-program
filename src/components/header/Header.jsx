import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                <img src="../../../src/assets/logo.svg" alt="" />
            </div>
            <div className="pages">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Services">Services</Link>
                    </li>
                    <li>
                        <Link to="/About">About us</Link>
                    </li>

                    <li>
                        <Link to="/ExtraSalespage">Extra Salespage</Link>
                    </li>
                    <button>
                        <li>
                            <Link to="/FreeGuide">Get your free guide now</Link>
                        </li>
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header
