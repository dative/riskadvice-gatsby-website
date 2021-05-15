import React from 'react'
import PropTypes from 'prop-types'
import { useUID } from 'react-uid'

const VideoModal = ({ videoUrl, children }) => {
  const uid = useUID()
  return (
    <>
      <a href={videoUrl} className="video-thumb" data-bs-toggle="modal" data-bs-target={`#modal-${uid}`}>
        {children}
      </a>
      <div
        className="modal modal-video fade"
        id={`modal-${uid}`}
        tabIndex="-1"
        aria-labelledby={`videoModalLabel-${uid}`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen modal-video--wrapper position-relative h-100 d-flex flex-column justify-content-center align-items-center">
          <button
            type="button"
            className="position-absolute top-0 end-0 m-2 btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
          <div className="modal-video--container container col-md-8">
            <div className="ratio ratio-16x9">
              <iframe src={`${videoUrl}?rel=0`} title="YouTube video" allowFullScreen />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

VideoModal.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default VideoModal
