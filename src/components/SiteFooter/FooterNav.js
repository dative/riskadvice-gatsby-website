import React from 'react'
import { Link } from 'gatsby'

const footerNav = [
  { label: 'Contact', link: '/contact' },
  { label: 'Privacy Policy', link: '/privacy-policy' },
  { label: 'Accessibility', link: '/accessibility' },
]

const FooterNav = () => (
  <div className="row">
    <div className="d-flex justify-content-start justify-content-md-center">
      <ul className="list-unstyled d-flex flex-column flex-md-row mt-md-4">
        {footerNav &&
          footerNav.map((footerLink, index) => (
            <li className="my-1 m-md-2">
              <Link to={footerLink.link} key={`footer-link-${index}`} className="text-white text-decoration-none">
                {footerLink.label}
              </Link>
            </li>
          ))}
        <li className="my-1 m-md-2">
          <a
            href="https://hellodative.com"
            className="text-white text-decoration-none"
            target="_blank"
            rel="noreferrer"
          >
            Website By Dative
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default FooterNav
