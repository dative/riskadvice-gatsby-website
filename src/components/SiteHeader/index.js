import * as React from 'react'
import { Link } from 'gatsby'

import RiskAdviceLogo from '../svgs/RiskAdviceLogo'
import NavToggleBtn from './NavToggleBtn'
import ClientPortalLink from './ClientPortalLink'
import useSiteMetadata from '../useSiteMetadata'
import NavSearchForm from './NavSearchForm'
import NavMenu from './NavMenu'

const SiteHeader = () => {
  const { clientPortalLink, phoneNumber } = useSiteMetadata()

  return (
    <header className="SiteHeader">
      <div className="py-2">
        <div className="container d-flex flex-column-reverse flex-lg-row justify-content-between">
          <div className="d-flex justify-content-between align-items-center">
            <Link className="SiteHeader--brand text-decoration-none" to="/">
              <RiskAdviceLogo />
              <span className="visually-hidden">Murray & MacDonald Insurance Services, Inc</span>
            </Link>
            <NavToggleBtn />
          </div>
          <div className="d-flex flex-column justify-content-end align-items-end">
            {clientPortalLink && <ClientPortalLink clientPortalLink={clientPortalLink} />}
            <div className="d-flex justify-content-end align-items-center">
              {phoneNumber && (
                <>
                  <span className="fw-light m-1 d-none d-lg-inline">Call or Text:</span>
                  <a href={`tel:${phoneNumber.value}`} className="text-decoration-none text-dark fw-bold m-1 fs-6">
                    {phoneNumber.label}
                  </a>
                </>
              )}
              <Link to="/#call-to-action" className="btn btn-primary ms-2">
                Call To Action
              </Link>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg" aria-label="Tenth navbar example">
          <div className="container">
            <div className="collapse navbar-collapse justify-content-md-between" id="site-header-navbar">
              <NavMenu />
              <NavSearchForm />
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
