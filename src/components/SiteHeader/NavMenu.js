import React from 'react'
import { Link } from 'gatsby'

const mainNavLinks = [
  {
    link: '/personal-insurance',
    label: 'Personal Insurance',
    children: [
      { link: '/#', label: 'Action' },
      { link: '/#', label: 'Action' },
      { link: '/#', label: 'Action' },
    ],
  },
  {
    link: '/business-insurance',
    label: 'Business Insurance',
    children: [
      { link: '/#', label: 'Action' },
      { link: '/#', label: 'Action' },
      { link: '/#', label: 'Action' },
    ],
  },
  {
    link: '/about-us',
    label: 'About Us',
    children: [
      { link: '/#', label: 'Action' },
      { link: '/#', label: 'Action' },
      { link: '/#', label: 'Action' },
    ],
  },
  {
    link: '/resources',
    label: 'Resources',
    children: [
      { link: '/#', label: 'Action' },
      { link: '/#', label: 'Action' },
      { link: '/#', label: 'Action' },
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
