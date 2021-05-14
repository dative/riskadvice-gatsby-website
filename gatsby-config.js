module.exports = {
  siteMetadata: {
    title: `Risk Advisors`,
    description: `At Murray & MacDonald Insurance Service Inc., we invest in education, international best practices, and ongoing risk resources that benefit our clients.`,
    author: `@hellodative`,
    siteUrl: `http://localhost:8000`,
    clientPortalLink: `https://clientportal.vertafore.com/Login/1006439-1`,
    phoneNumber: {
      label: `800-800-8990`,
      value: `+18008008990`,
    },
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Risk Advice`,
        short_name: `MMISI`,
        start_url: `/`,
        background_color: `#5264AD`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
