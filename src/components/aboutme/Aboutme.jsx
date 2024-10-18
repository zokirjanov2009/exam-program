import "./Aboutme.css"

const Aboutme = () => {
    return (
        <div>
            <div className="about_me">
                <div className="aboutme-text">
                    <h1>Hear out what my <br /> clients say about me.</h1>
                </div>
                <div className="cards">
                    <div className="about-card">
                        <h2>
                        "I gained so much <br /> confidence in my ability to <br /> connect and deepen my <br /> relationships with people. "
                        </h2>
                        <h1>Jane</h1>
                        <img src="../../../src/assets/about.png" alt="" />
                        <img src="../../../src/assets/Stars.svg" alt="" />
                    </div>
                    <div className="about-card">
                    <h2>
                        "I gained so much <br /> confidence in my ability to <br /> connect and deepen my <br /> relationships with people. "
                        </h2>
                        <h1>Catherine</h1>
                        <img src="../../../src/assets/about2.png" alt="" />
                        <img src="../../../src/assets/Stars2.svg" alt="" />
                    </div>
                    <div className="about-card">
                    <h2>
                        "I gained so much <br /> confidence in my ability to <br /> connect and deepen my <br /> relationships with people. "
                        </h2>
                        <h1>Jane</h1>
                        <img src="../../../src/assets/about3.png" alt="" />
                        <img src="../../../src/assets/Stars2.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme
