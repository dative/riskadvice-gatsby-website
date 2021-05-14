import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" bodyClass="wave-bg" />
    <div className="container col-xxl-10 px-4 py-5">
      <div className="row flex-lg-row align-items-center g-5 py-5">
        <div className="col-10 col-sm-7 col-lg-5">
          <StaticImage
            src="../images/Teenager-Student-Driver-Driving-with-Adult,-Parent,-or-Father-in-Passenger-Seat-866250900_1416x2125.jpg"
            className="d-block mx-lg-auto img-fluid rounded-3"
            width={445}
            quality={80}
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt="Teenager Student Driver Driving with Adult"
          />
        </div>
        <div className="col-lg-7">
          <h1 className="display-5 fw-bold lh-1 mb-3">We help you protect what you love most.</h1>
          <p className="lead">
            Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Link to="/" className="btn btn-primary btn-lg px-4 me-md-2">
              See Our Approach
            </Link>
          </div>
        </div>
      </div>
    </div>

    <div className="container col-xxl-10 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-sm-5">
          <a href="https://www.youtube.com/watch?v=-NAhnxRdMuQ" className="video-thumb">
            <StaticImage
              src="../images/board-room-video-thumb.jpg"
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
            <a href="#" className="btn btn-primary btn-lg px-4 me-md-2">
              Meet Our Advisors
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
