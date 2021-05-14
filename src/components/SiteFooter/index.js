import React from 'react'
import { Link } from 'gatsby'
import useSiteMetadata from '../useSiteMetadata'
import FooterNav from './FooterNav'

import '../../styles/SiteFooter.scss'
import FooterOffices from './FooterOffices'

const SiteFooter = () => {
  const { socialMedia } = useSiteMetadata()

  return (
    <footer className="SiteFooter py-2 pt-5 text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <Link to="/" className="text-white text-decoration-none fs-5">
              Murray & MacDonald
              <br />
              Insurance Services Inc.
            </Link>
            <ul className="SiteFooter--social-media-links list-inline mt-3">
              {socialMedia.facebook !== undefined && (
                <li className="list-inline-item">
                  <a
                    href={socialMedia.facebook}
                    className="social-link"
                    target="_blank"
                    rel="noreferrer"
                    title="MMISI Facebook Page"
                  >
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path
                        d="M30 3.21429V26.7857C30 28.5603 28.5603 30 26.7857 30H21.0737V18.1339H25.1317L25.7143 13.6071H21.0737V10.7143C21.0737 9.40179 21.4353 8.51116 23.317 8.51116H25.7143V4.46652C25.2991 4.41295 23.8795 4.28571 22.2187 4.28571C18.7634 4.28571 16.3929 6.39509 16.3929 10.2723V13.6138H12.3214V18.1406H16.3996V30H3.21429C1.43973 30 0 28.5603 0 26.7857V3.21429C0 1.43973 1.43973 0 3.21429 0H26.7857C28.5603 0 30 1.43973 30 3.21429Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </li>
              )}

              {socialMedia.linkedin !== undefined && (
                <li className="list-inline-item">
                  <a
                    href={socialMedia.linkedin}
                    className="social-link"
                    target="_blank"
                    rel="noreferrer"
                    title="MMISI Linkedin Page"
                  >
                    <svg width="30" height="30" viewBox="0 0 29 30" fill="none">
                      <path
                        d="M26.9286 0H2.06496C0.92567 0 0 0.970982 0 2.16295V27.8371C0 29.029 0.92567 30 2.06496 30H26.9286C28.0679 30 29 29.029 29 27.8371V2.16295C29 0.970982 28.0679 0 26.9286 0ZM8.76473 25.7143H4.46652V11.3973H8.7712V25.7143H8.76473ZM6.61562 9.44196C5.23683 9.44196 4.12344 8.28348 4.12344 6.86384C4.12344 5.4442 5.23683 4.28571 6.61562 4.28571C7.98795 4.28571 9.10781 5.4442 9.10781 6.86384C9.10781 8.29018 7.99442 9.44196 6.61562 9.44196ZM24.8766 25.7143H20.5783V18.75C20.5783 17.0893 20.546 14.9531 18.3451 14.9531C16.1054 14.9531 15.7623 16.7612 15.7623 18.6295V25.7143H11.4641V11.3973H15.5875V13.3527H15.6458C16.2219 12.2277 17.6266 11.0424 19.7174 11.0424C24.0674 11.0424 24.8766 14.0089 24.8766 17.8661V25.7143Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </li>
              )}
            </ul>
          </div>
          <div className="col-md-8">
            <FooterOffices />
          </div>
        </div>
        <FooterNav />
      </div>
    </footer>
  )
}

export default SiteFooter
