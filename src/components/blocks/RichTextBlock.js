import React from 'react'
import PropTypes from 'prop-types'

const RichTextBlock = ({ children }) => (
  <div className="block block--rich-text py-5">
    <div className="container-fluid container-lg">
      <div className="row">
        <div className="col-lg-10 offset-lg-1">{children}</div>
      </div>
    </div>
  </div>
)

RichTextBlock.propTypes = {
  children: PropTypes.node.isRequired,
}

export default RichTextBlock
