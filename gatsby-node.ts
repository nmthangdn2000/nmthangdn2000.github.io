import { GatsbyNode } from "gatsby";
import path from "path";
import { projects } from "./src/data/projects.data";

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
    const { createPage } = actions;

    // Create pages for Projects
    projects.forEach((project) => {
        createPage({
            path: `/projects/${project.slug}`,
            component: path.resolve(`./src/templates/project.tsx`),
            context: project,
        });
    });
};
