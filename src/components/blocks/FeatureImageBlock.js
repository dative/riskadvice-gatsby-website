import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import VideoModal from '../VideoModal'

const FeatureImageBlock = () => (
  <div className="block block--feature-image py-5">
    <div className="container-fluid container-lg">
      <div className="row g-0 shadow">
        <div className="col-md-6 block--feature-image--picture-col">
          <VideoModal videoUrl="https://www.youtube.com/embed/-NAhnxRdMuQ">
            <StaticImage
              src="../../images/man-driving-car.jpg"
              className="d-block w-100 img-fluid"
              width={555}
              quality={80}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Man driving car"
            />
          </VideoModal>
        </div>
        <div className="col-md-6 bg-white d-flex flex-column justify-content-center align-items-center block--feature-image--content-col">
          <div className="block--feature-image--content">
            <p>
              Is it a Good Idea to Take Your College
              <br />
              Child Off Your Auto Insurance Policy?
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default FeatureImageBlock
