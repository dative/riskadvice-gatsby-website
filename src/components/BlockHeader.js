import React from 'react'
import PropTypes from 'prop-types'

const BlockHeader = ({ children }) => <h2 className="text-center fw-bold mb-5">{children}</h2>

BlockHeader.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlockHeader
