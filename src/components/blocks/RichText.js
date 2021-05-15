import React from 'react'
import PropTypes from 'prop-types'

const RichText = ({ children }) => (
  <div className="block block--rich-text py-5">
    <div className="container-fluid container-lg">
      <div className="row">
        <div className="col-lg-10 offset-lg-1">{children}</div>
      </div>
    </div>
  </div>
)

RichText.propTypes = {
  children: PropTypes.node.isRequired,
}

export default RichText
