module.exports = {
  siteMetadata: {
    title: `red llama`,
    description: `A web app development group.`,
    twitter: `@redllama`,
    url: `https://redllamagroup.com`,
    logo: `src/images/logo.png`,
    menuLinks:[
      {
        name:'home',
        link:'/'
      },
      {
        name:'services',
        link:'/services'
      },
      {
        name:'projects',
        link:'/projects'
      },
      {
        name:'contact',
        link:'/contact'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/static/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/projects`,
        name: `projects`,
      },
    },
    "gatsby-transformer-json",
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
