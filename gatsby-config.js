module.exports = {
  siteMetadata: {
    title: `Linda Lai`,
    description: `Words, words, words.`,
    author: `@linda-lai`,
  },
  plugins: [
    // Support for server rendering data added with React Helmet (to control your document head)
    `gatsby-plugin-react-helmet`,
    {
      // Sourcing data into Gatsby application from local filesystem
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/pages/content`,
      },
    },
    // Intercepts all local links that have not been created in React, and replaces their behavior
    // Avoids browser refreshing whole page when navigating local pages, preserving the Single Page Application feel
    `gatsby-plugin-catch-links`,
    // Creates ImageSharp nodes from image types supported by Sharp image processing library
    // Provides fields in their GraphQL types for processing images in a variety of ways (resizing, cropping, and creating responsive images)
    `gatsby-transformer-sharp`,
    // Exposes several image processing functions built on the Sharp image processing library
    `gatsby-plugin-sharp`,
    {
      // Manifest for web apps allows users to add site to home on most mobile browsers
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      // Parses Markdown files using Remark
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            // Adds cards and syntax highlighting to code blocks in Markdown files
            resolve: `gatsby-remark-highlight-code`
          },
          {
            // Processes images in markdown so they can be used in the production build
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
