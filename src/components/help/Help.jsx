import "./Help.css"

const Help = () => {
  return (
    <div>
      <div className="big-help">
        <img src="../../../src/assets/Vector2.svg" alt="" />
        <div className="help-text">
          <h1>I can help you in these <br /> particular areas.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua minim veniam. <br />
          <br />
            Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptatem accusantium doloremque laudantium, totam <br /> rem aperiam, eaque ipsa quae ab illo inventore veritatis <br /> quasi architecto beatae vitae dicta sunt explicabo. </p>
        </div>
        <div className="home-help-boxes">
          <div className="box">
            <img src="../../../src/assets/help.svg" alt="" />
            <h2>1:1 Coaching</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
            </p>
          </div>
          <div className="box">
            <img src="../../../src/assets/help2.svg" alt="" />
            <h2>Consultation</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
            </p>
          </div>
          <div className="box">
            <img src="../../../src/assets/help3.svg" alt="" />
            <h2>Group Coaching Sessions</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Help
