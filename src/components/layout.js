import React from 'react'
import PropTypes from 'prop-types'

import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

const Layout = ({ children }) => (
  <>
    <SiteHeader siteTitle="Title" />
    <main>{children}</main>
    <SiteFooter />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
