import React from 'react'
import PropTypes from 'prop-types'

import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

const Layout = ({ children }) => (
  <>
    <SiteHeader siteTitle="Title" />
    <main>{children}</main>
    <SiteFooter />
    <div
      className="modal modal-video fade"
      id="videoModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="videoModal"
      aria-hidden="true"
    >
      <button
        type="button"
        className="position-absolute top-0 end-0 m-2 btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      />
      <div className="modal-dialog modal-video--wrapper position-relative h-100 d-flex flex-column justify-content-center align-items-center">
        <div className="modal-content">
          <div className="modal-video--container">
            <div className="ratio ratio-16x9">
              <iframe src="#" title="YouTube video" allowFullScreen />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
