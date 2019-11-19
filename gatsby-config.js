const theme = require("./src/theme")

module.exports = {
  siteMetadata: {
    title: `Awakened`,
    description: `a webcomic`,
    author: `HUE`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./data`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Awakened`,
        short_name: `Awakened`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // next line must be after gatsby-plugin-manifest
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: Object.values(theme.fonts).map(fontName => ({
          family: fontName,
        })),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-317656-3",
      },
    },
    `gatsby-plugin-favicon`,
  ],
}
