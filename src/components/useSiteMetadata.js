import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            siteUrl
            description
            author
            clientPortalLink
            phoneNumber {
              label
              value
            }
            socialMedia {
              facebook
              linkedin
              twitter
              youtube
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
