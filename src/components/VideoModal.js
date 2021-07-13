import React from 'react'
import PropTypes from 'prop-types'

const VideoModal = ({ videoUrl, children }) => (
  <a href={videoUrl} className="video-thumb" data-bs-toggle="modal" data-bs-target="#videoModal">
    {children}
  </a>
)

VideoModal.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default VideoModal
