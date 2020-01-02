const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Jaison Schmidt - Dev Front End :-)`,
    description: `Em meu site você vai encontrar informações sobre tecnologia, tutoriais, videoaulas, estudos dirigidos e um pouco sore meu portfolio.`,
    author: `gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jaison.com.br`,
        short_name: `Jaison`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            },
          },
          "gatsby-remark-lazy-load",
          "gatsby-remark-prismjs",
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`300`, `600`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-segment-js`,
      options: {
        // your segment write key for your production environment
        // when process.env.NODE_ENV === 'production'
        // required; non-empty string
        prodKey: `SEGMENT_PRODUCTION_WRITE_KEY`,

        // if you have a development env for your segment account, paste that key here
        // when process.env.NODE_ENV === 'development'
        // optional; non-empty string
        devKey: `SEGMENT_DEV_WRITE_KEY`,

        // boolean (defaults to false) on whether you want
        // to include analytics.page() automatically
        // if false, see below on how to track pageviews manually
        trackPage: false,

        // boolean (defaults to false) on whether to load segment
        // after a user action (scroll or route change) + delay
        // this will bring down your TTI but you might miss 1 second of data.
        // see here for more info on TTI: https://github.com/GoogleChrome/lighthouse/blob/master/docs/scoring.md#performance
        delayLoad: false,

        // time to wait after scroll action in ms. Defaults to 1000ms
        delayLoadTime: 1000,
      },
    },
    `gatsby-plugin-transition-link`,
  ],
}
