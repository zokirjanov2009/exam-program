import React from 'react'
import "./Blog.css"

const Blog = () => {
    return (
        <div>
            <div className="Blog">
                <div className="blog-text">
                    <h1>Stay Motivated, read the <br /> weekly blog articles.</h1>
                </div>
                <div className="Cards">
                    <div className="blog-card">
                        <img src="../../../src/assets/blog.png" alt="" />
                        <h2>Balancing your love and <br /> work life.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna <br /> aliqua minim veniam.
                        </p>
                    </div>
                    <div className="blog-card">
                        <img src="../../../src/assets/blog2.png" alt="" />
                        <h2>A short break from Social <br /> Media is important.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna <br /> aliqua minim veniam.
                        </p>
                    </div>
                    <div className="blog-card">
                        <img src="../../../src/assets/blog3.png" alt="" />
                        <h2>How to be 1% Better Every <br /> Day</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna <br /> aliqua minim veniam.
                        </p>
                    </div>

                </div>
                <button>Read more blogs</button>
            </div>
        </div>
    )
}

export default Blog
