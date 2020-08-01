module.exports = {
  siteMetadata: {
    title: `Tyler Harpool`,
    name: `Ground Control`,
    siteUrl: `https://tylerharpool.netlify.com`,
    description: `High Quality Technical Blogs about Javascript Ecosystem`,
    hero: {
      heading: `Welcome to my site, here you will find the latest musings.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/tylerharpool`,
      },
      {
        name: `github`,
        url: `https://github.com/thebetterjort`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/tylerharpool`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/tylerharpool`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/tylerharpool`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tyler Harpool`,
        short_name: `Harpool`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
