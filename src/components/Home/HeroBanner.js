import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const HeroBanner = () => (
  <div className="container col-xxl-10 px-4 py-5">
    <div className="row flex-lg-row align-items-center g-5 py-5">
      <div className="col-10 col-sm-7 col-lg-5">
        <StaticImage
          src="../../images/Teenager-Student-Driver-Driving-with-Adult,-Parent,-or-Father-in-Passenger-Seat-866250900_1416x2125.jpg"
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
)

export default HeroBanner
