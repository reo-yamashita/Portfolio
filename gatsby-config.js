const { SiteConfig } = require("./src/config/site")
const path = require("path")

module.exports = {
  siteMetadata: {
    ...SiteConfig,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: SiteConfig.title,
        short_name: SiteConfig.shortName,
        description: SiteConfig.description,
        start_url: SiteConfig.pathPrefix,
        background_color: SiteConfig.backgroundColor,
        theme_color: SiteConfig.themeColor,
        display: "standalone",
        icon: SiteConfig.favicon,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "content",
        path: path.resolve(__dirname, "content"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(__dirname, "static"),
        name: "images",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 320,
              linkImagesToOriginal: false,
            },
          },
        ],
        plugins: [`gatsby-remark-images`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-176573539-1",
        head: false,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
      },
    },
  ],
}
