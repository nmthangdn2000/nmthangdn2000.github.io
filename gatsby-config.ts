import * as dotenv from "dotenv";
import type { GatsbyConfig } from "gatsby";

dotenv.config({
    path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
    siteMetadata: {
        title: "Nguyễn Lê Anh Minh",
        description: "Nguyễn Lê Anh Minh portfolio",
    },
    graphqlTypegen: true,
    plugins: [
        // {
        //     resolve: "gatsby-source-contentful",
        //     options: {
        //         accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        //         spaceId: process.env.CONTENTFUL_SPACE_ID,
        //         downloadLocal: true,
        //     },
        // },
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/img/favicon.png`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
    ],
};

export default config;
