import React from 'react'
import PropTypes from 'prop-types'
import { StaticImage } from 'gatsby-plugin-image'
import VideoModal from '../VideoModal'

const FeatureImageBlock = ({ picture, videoUrl, content }) => (
  <div className="block block--feature-image py-5">
    <div className="container-fluid container-lg">
      <div className="row g-0 shadow">
        <div className="col-md-6 block--feature-image--picture-col">
          <VideoModal videoUrl={videoUrl}>
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
          <div className="block--feature-image--content" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  </div>
)

FeatureImageBlock.propTypes = {
  picture: PropTypes.string.isRequired,
  videoUrl: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default FeatureImageBlock
