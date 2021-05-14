import React from 'react'

const NavToggleBtn = () => (
  <button
    className="btn d-lg-none"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#site-header-navbar"
    aria-controls="site-header-navbar"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-list"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
      />
    </svg>
  </button>
)

export default NavToggleBtn
