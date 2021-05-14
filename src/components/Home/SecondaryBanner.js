import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const SecondaryBanner = () => (
  <div className="container col-xxl-10 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-sm-5">
        <a href="https://www.youtube.com/watch?v=-NAhnxRdMuQ" className="video-thumb">
          <StaticImage
            src="../../images/board-room-video-thumb.jpg"
            className="d-block mx-lg-auto img-fluid"
            width={439}
            quality={80}
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt="MMISI Board Room"
          />
        </a>
      </div>
      <div className="col-lg-7">
        <h1 className="display-5 fw-bold lh-1 mb-3">We’re not your average insurance company.</h1>
        <p className="lead">
          Insurance is just one piece of the puzzle. It’s just as important to recognize all your potential risks and
          find ways to reduce those risks.
        </p>
        <p className="lead">
          That’s why our team has Certified Risk Managers on board and a proven process to reduce your risk.
        </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <Link to="/" className="btn btn-primary btn-lg px-4 me-md-2">
            Meet Our Advisors
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default SecondaryBanner
