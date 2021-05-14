import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'
import HeroBanner from '../components/Home/HeroBanner'
import SecondaryBanner from '../components/Home/SecondaryBanner'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" bodyClass="wave-bg" />
    <HeroBanner />
    <SecondaryBanner />

    <div className="container col-xxl-10 px-4 py-5" id="hanging-icons">
      <h2 className="pb-2 text-center" style={{ fontWeight: 900 }}>
        Serving our clients for over 45 years.
      </h2>
      <div className="row g-5 py-5 row-cols-1 row-cols-md-2">
        <div className="col d-flex align-items-start">
          <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
            <svg width="65" height="52" viewBox="0 0 65 52" fill="none">
              <g clipPath="url(#clip0)">
                <path
                  opacity="0.4"
                  d="M48.75 25.8984C50.6784 25.8984 52.5634 25.3288 54.1668 24.2617C55.7702 23.1945 57.0199 21.6777 57.7578 19.9031C58.4958 18.1285 58.6889 16.1758 58.3127 14.2918C57.9365 12.4079 57.0079 10.6774 55.6443 9.31917C54.2807 7.96093 52.5434 7.03596 50.6521 6.66123C48.7608 6.28649 46.8004 6.47882 45.0188 7.21389C43.2372 7.94896 41.7145 9.19376 40.6432 10.7909C39.5718 12.388 39 14.2657 39 16.1865C39 18.7623 40.0272 21.2326 41.8557 23.0539C43.6842 24.8752 46.1641 25.8984 48.75 25.8984ZM53.625 29.1357H53.2391C51.8273 29.6213 50.3344 29.9451 48.75 29.9451C47.1656 29.9451 45.6726 29.6213 44.2609 29.1357H43.875C41.8031 29.1357 39.8937 29.7326 38.218 30.6937C40.6961 33.3544 42.25 36.885 42.25 40.79V44.6748C42.25 44.8974 42.1992 45.1098 42.1891 45.3223H60.125C61.4179 45.3223 62.6579 44.8107 63.5721 43.9C64.4864 42.9893 65 41.7542 65 40.4663C65.0008 38.9781 64.7071 37.5044 64.1358 36.1293C63.5644 34.7543 62.7266 33.5049 61.6701 32.4526C60.6137 31.4003 59.3594 30.5657 57.979 29.9966C56.5985 29.4275 55.119 29.1349 53.625 29.1357Z"
                  fill="#5264AD"
                />
                <path
                  d="M19.5 25.8984C21.7498 25.8984 23.949 25.2339 25.8196 23.9889C27.6902 22.7439 29.1482 20.9743 30.0091 18.9039C30.8701 16.8335 31.0953 14.5553 30.6564 12.3574C30.2175 10.1595 29.1342 8.14056 27.5433 6.55596C25.9525 4.97135 23.9257 3.89222 21.7192 3.45502C19.5126 3.01783 17.2255 3.24221 15.147 4.0998C13.0685 4.95738 11.2919 6.40965 10.042 8.27295C8.79213 10.1363 8.125 12.3269 8.125 14.5679C8.1242 16.0561 8.41788 17.5298 8.98924 18.9048C9.5606 20.2799 10.3984 21.5293 11.4549 22.5816C12.5113 23.6339 13.7656 24.4684 15.146 25.0376C16.5265 25.6067 18.006 25.8992 19.5 25.8984ZM27.3 29.1357H26.457C24.2901 30.1907 21.9118 30.7441 19.5 30.7544C17.0016 30.7544 14.6656 30.1474 12.543 29.1357H11.7C8.59721 29.1366 5.62174 30.3647 3.42774 32.5501C1.23374 34.7355 0.000807702 37.6994 0 40.79L0 43.7036C0 44.9915 0.513615 46.2266 1.42785 47.1373C2.34209 48.048 3.58207 48.5596 4.875 48.5596H34.125C35.4179 48.5596 36.6579 48.048 37.5721 47.1373C38.4864 46.2266 39 44.9915 39 43.7036V40.79C38.9992 37.6994 37.7663 34.7355 35.5723 32.5501C33.3783 30.3647 30.4028 29.1366 27.3 29.1357Z"
                  fill="#5264AD"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="65" height="51.7969" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <h2>
              <small className="d-block fs-6">We Help</small>
              <span className="fw-bold fs-2">Families &amp; Individuals</span>
            </h2>
            <p>
              While individuals may not have a risk department, we certainly lead custom lifestyles. We work our whole
              lives to build a lifestyle unique to our identify. Make sure its protected.
            </p>
            <Link to="/" className="btn btn-primary btn-lg">
              Personal Insurance Services
            </Link>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
            <svg width="65" height="52" viewBox="0 0 65 52" fill="none">
              <path
                opacity="0.4"
                d="M32.5 39H13V22.75H6.5V48.75C6.5 49.612 6.84241 50.4386 7.4519 51.0481C8.0614 51.6576 8.88805 52 9.75 52H35.75C36.612 52 37.4386 51.6576 38.0481 51.0481C38.6576 50.4386 39 49.612 39 48.75V22.75H32.5V39ZM52 22.75V50.375C52 50.806 52.1712 51.2193 52.476 51.524C52.7807 51.8288 53.194 52 53.625 52H56.875C57.306 52 57.7193 51.8288 58.024 51.524C58.3288 51.2193 58.5 50.806 58.5 50.375V22.75H52Z"
                fill="#5264AD"
              />
              <path
                d="M64.4465 14.4422C65.8785 16.6055 64.3348 19.5 61.7449 19.5H3.25508C0.655079 19.5 -0.888671 16.6055 0.553517 14.4422L9.2168 1.4422C9.51307 0.997486 9.91484 0.633043 10.3862 0.381394C10.8576 0.129745 11.384 -0.00128106 11.9184 9.44118e-06H53.0715C53.6071 -0.000183185 54.1345 0.131241 54.6073 0.38272C55.0802 0.634199 55.484 0.998027 55.7832 1.4422L64.4465 14.4422Z"
                fill="#5264AD"
              />
            </svg>
          </div>
          <div>
            <h2>
              <small className="d-block fs-6">We Advise</small>
              <span className="fw-bold fs-2">Businesses &amp; Organizations</span>
            </h2>
            <p>
              From sole proprietors to Fortune 1000 corporations, we help organizations like yours reduce your risk with
              customized strategies to most cost effectively maximize your protection.
            </p>
            <Link to="/" className="btn btn-primary btn-lg">
              Business Insurance Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
