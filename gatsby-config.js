module.exports = {
  siteMetadata: {
    title: `lukaszlesko.com`,
    description: `do something great`,
    author: `@lukaszlesko_com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `lukaszlesko`,
        short_name: `lukasz`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
        options: {
          bucketName: "lukaszlesko.com",
        },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    //`gatsby-plugin-offline`,
    {
        resolve: `gatsby-plugin-segment-js`,
        options: {
            prodKey: 'BvND4dY6m7aR6kX3XQmLYmqojec9Lvvj',
            devKey: 'oyUex6Nz0dgppZXYg3DMixHjyJjQzGqX',
            trackPage: true,
            delayLoad: false,
            delayLoadTime: 1000
        }
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `markdown-pages`,
            path: `${__dirname}/src/markdown-pages`,
        },
    },
    `gatsby-transformer-remark`,
  ],
}
