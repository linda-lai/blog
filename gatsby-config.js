module.exports = {
  siteMetadata: {
    title: `Linda Lai - Blog`,
    description: `Words, words, words.`,
    author: `@lindalogical`,
  },
  plugins: [
    // Support for server rendering data added with React Helmet (a component which lets you control your document head using their React component).
    `gatsby-plugin-react-helmet`,
    {
      // Plugin for sourcing data into your Gatsby application from your local filesystem.
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    // Intercepts all local links that have not been created in React, and replaces their behavior. This avoids the browser having to refresh the whole page when navigating between local pages, preserving the Single Page Application (SPA) feel.
    `gatsby-plugin-catch-links`,
    // Creates ImageSharp nodes from image types that are supported by the Sharp image processing library and provides fields in their GraphQL types for processing your images in a variety of ways including resizing, cropping, and creating responsive images.
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      // Parses Markdown files using Remark
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
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
