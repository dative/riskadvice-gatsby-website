import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const NavMenuLink = ({ link, children }) => (
  <li className="nav-item">
    <Link className="nav-link text-dark" to={link}>
      {children}
    </Link>
  </li>
)

NavMenuLink.propTypes = {
  link: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

export default NavMenuLink
