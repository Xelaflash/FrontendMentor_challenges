import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: 'Frontend challenges',
    siteUrl: `https://stupefied-liskov-7a3b28.netlify.app/`,
    description: `Repo made to centralize frontend challenges (FCC, Frontend Mentor...)`,
    image: '/meta_image.png',
  },
  plugins: [
    // {
    //   resolve: 'gatsby-source-sanity',
    //   options: {
    //     projectId: '',
    //     dataset: 'production',
    //     watchMode: true,
    //     token: process.env.SANITY_TOKEN,
    //   },
    // },
    'gatsby-plugin-styled-components',
    `gatsby-plugin-image`,
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/`,
      },
      __key: 'images',
    },
  ],
};
