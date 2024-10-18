import React from "react";
import "./Footer.css"
const Footer = () => {
    return (
        <div className="Footer">
            <div className="footer-main">
                <div className="logo">
                    <img src="../../../src/assets/footer-logo.svg" alt="" width={200} />
                    <p>Design amazing digital experiences that <br /> create more happy in the world.</p>
                </div>
                <div className="footer-pages">
                    <h3>Pages</h3>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">Services</a>
                        </li>
                        <li>
                            <a href="/">About us</a>
                        </li>
                        <li>
                            <a href="/">Extra Sales/Landingpage</a>
                        </li>
                        <li>
                            <a href="/">Free guide</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-pages">
                <h3>Contact</h3>
                    <ul>
                        <li>
                            <a href="/">+123 456 789
                            </a>
                        </li>
                        <li>
                            <a href="/">hello@happydigital.nl
                            </a>
                        </li>
                        <li>
                            <a href="/">Instagram
                            </a>
                        </li>
        
                        <li>
                            <a href="/">Linkedin</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
