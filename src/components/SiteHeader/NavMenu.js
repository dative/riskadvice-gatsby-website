import React from 'react'
import { Link } from 'gatsby'

const mainNavLinks = [
  {
    link: '/',
    label: 'Personal Insurance',
    children: [
      { link: '/sample-page', label: 'Homeowners Insurance' },
      { link: '/sample-page', label: 'Auto Insurance' },
      { link: '/sample-page', label: 'Motorcycle Insurance' },
      { link: '/sample-page', label: 'Marine/Boat Owners' },
      { link: '/sample-page', label: 'RV Owners' },
      { link: '/sample-page', label: 'Flood Insurance' },
      { link: '/sample-page', label: 'Life Insurance' },
      { link: '/sample-page', label: 'Builder Risk' },
    ],
  },
  {
    link: '/',
    label: 'Business Insurance',
    children: [
      { link: '/sample-page', label: 'General Liability' },
      { link: '/sample-page', label: 'Professional Liability' },
      { link: '/sample-page', label: 'Cyber Liability' },
      { link: '/sample-page', label: 'Commercial Property' },
      { link: '/sample-page', label: 'Commercial Auto' },
      { link: '/sample-page', label: 'Workers Compensation' },
      { link: '/sample-page', label: 'Ocean & Inland Marine' },
      { link: '/sample-page', label: 'Excess Liability/Umbrella' },
    ],
  },
  {
    link: '/',
    label: 'About Us',
    children: [
      { link: '/sample-page', label: 'Our Company' },
      { link: '/sample-page', label: 'Careers Opportunities' },
      { link: '/sample-page', label: 'Client Testimonials' },
    ],
  },
  {
    link: '/',
    label: 'Resources',
    children: [
      { link: '/blog', label: 'Blog' },
      { link: '/sample-page', label: 'Client Portal' },
      { link: '/sample-page', label: 'Make a Payment' },
      { link: '/sample-page', label: 'Report a Claim' },
      { link: '/sample-page', label: 'Risk Assessment' },
      { link: '/sample-page', label: 'Certificate of Insurance Request' },
      { link: '/sample-page', label: 'Insurance Binder Request' },
      { link: '/sample-page', label: 'Request a Quote' },
    ],
  },
  {
    link: '/contact',
    label: 'Contact',
  },
]

const NavMenu = () => (
  <ul className="navbar-nav">
    {mainNavLinks &&
      mainNavLinks.length > 0 &&
      mainNavLinks.map((navLink, index) =>
        navLink.children === undefined || navLink.children.length === 0 ? (
          <li key={`nav-link-${index}`} className="nav-item">
            <Link className="nav-link text-dark" to={navLink.link}>
              {navLink.label}
            </Link>
          </li>
        ) : (
          <li key={`nav-link-${index}`} className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle text-dark"
              to={navLink.link}
              id={`nav-label-${index}`}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {navLink.label}
            </Link>
            <ul className="dropdown-menu" aria-labelledby={`nav-label-${index}`}>
              {navLink.children !== undefined &&
                navLink.children.length &&
                navLink.children.map((childLink, childIndex) => (
                  <li key={`nav-child-index-${childIndex}`}>
                    <Link className="dropdown-item text-dark" to={childLink.link}>
                      {childLink.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </li>
        )
      )}
  </ul>
)

export default NavMenu
