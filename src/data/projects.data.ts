import { randomImgUrl } from "../utilities/text.util";

export enum ProjectFilterCategory {
    ALL = "project_all",
    PERSONAL = "project_personal",
    PASSGENIX_SOLUTIONS = "project_passgenix_solutions",
    WEB_DEVELOPMENT = "project_web_development",
    MOBILE_DEVELOPMENT = "project_mobile_development",
    AI_AND_ML = "project_ai_and_ml",
    DATA_ANALYZING = "project_data_analyzing",
    BLOCKCHAIN = "project_blockchain",
}

export type Project = {
    name: string;
    filterCategories: ProjectFilterCategory[];
    description: string;
    clientLogo: string;
    thumbnail: string;
    position: string;
    techStacks: string[];
    slug: string;
    date: string;
    endDate: Date;
    imageUrl?: string;
    website?: string;
    github?: string;
    youtube?: string;
};

export const projects: Project[] = [
    {
        name: "Team project: Ancv - WREF",
        filterCategories: [ProjectFilterCategory.ALL, ProjectFilterCategory.PERSONAL, ProjectFilterCategory.MOBILE_DEVELOPMENT, ProjectFilterCategory.AI_AND_ML],
        description: "An agricultural mobile application ecosystem that provides free mobile applications to farmers as well as the agricultural service industry in Vietnam.",
        clientLogo: "/img/clients/ancv-wref.png",
        thumbnail: "/img/projects/ancv-wref/thumbnail.jpg",
        position: "Full-stack Developer, Mobile developer",
        techStacks: ["Java", "Kotlin (Mobile)", "TensorFlow + Keras (LSTM, CNN)", "Open Weather (Weather Realtime Database)", "NodeJS (BE)", "MongoDB"],
        slug: "ancv-wref",
        date: "Jun.2019 – Mar.2022",
        endDate: new Date("2022-03-01"),
        github: "https://github.com/nmthangdn2000/AnCv_SF_UH21",
        youtube: "https://www.youtube.com/embed/zXK2wpIHI8c?si=k58zhu1AhBI3kdvv",
    },
    {
        name: "Drought Prediction Application",
        filterCategories: [ProjectFilterCategory.ALL, ProjectFilterCategory.PERSONAL, ProjectFilterCategory.AI_AND_ML, ProjectFilterCategory.DATA_ANALYZING],
        description: "Research and build a mobile application to solve the drought problem in agricultural field.",
        thumbnail: "/img/projects/drought-prediction-application/thumbnail.jpg",
        clientLogo: "/img/clients/my-project.png",
        position: "Full-stack Developer, Mobile developer",
        techStacks: ["React Native (Mobile)", "Open Weather (Weather Realtime Database)", "TensorFlow + Keras (LSTM, CNN)", "NodeJS (BE)", "MongoDB"],
        slug: "drought-prediction-application",
        date: "Mar.2022 – Jun.2022",
        endDate: new Date("2022-06-01"),
        youtube: "https://www.youtube.com/embed/g4Lg2CxrGIw?si=f2GN3CRgd8wFP7p0",
    },
    {
        name: "Flood Detection Application",
        filterCategories: [
            ProjectFilterCategory.ALL,
            ProjectFilterCategory.PERSONAL,
            ProjectFilterCategory.MOBILE_DEVELOPMENT,
            ProjectFilterCategory.AI_AND_ML,
            ProjectFilterCategory.DATA_ANALYZING,
        ],
        description: "Research and build a mobile application to solve the flood problem in city area.",
        thumbnail: "/img/projects/flood-detection-application/thumbnail.jpg",
        clientLogo: "/img/clients/my-project.png",
        position: "Full-stack Developer, Mobile developer",
        techStacks: ["React Native (Mobile)", "Google Earth Engine (Remote Sensing Realtime Database)", "NodeJS (BE)", "MongoDB"],
        slug: "flood-detection-application",
        date: "Mar.2022 – Jun.2022",
        endDate: new Date("2022-06-01"),
        github: "https://github.com/nabatti99/CanhBaoNgapLut",
        website: "https://dut.udn.vn/wref/gioithieu/id/3791",
        youtube: "https://www.youtube.com/embed/9uAIwCMSsmM?si=hgeuzWUCFTL8h5_y",
    },
    {
        name: "Capstone Project: HomeLab.ai",
        filterCategories: [ProjectFilterCategory.ALL, ProjectFilterCategory.PERSONAL, ProjectFilterCategory.WEB_DEVELOPMENT, ProjectFilterCategory.AI_AND_ML],
        description: "A web application that help designers reduce time when prepare an idea and make an architecture design for their customer.",
        thumbnail: "/img/projects/homelab-ai/thumbnail.jpg",
        clientLogo: "/img/clients/homelab-ai.png",
        position: "Full-stack Developer",
        techStacks: ["ReactJS (Web)", "TensorFlow", "Matlab", "Pytorch", "Hybrid AI Prediction Model", "Solidity (Blockchain)", "Coohom (3D Platform)"],
        slug: "homelab-ai",
        date: "Apr.2022 – Mar.2023",
        endDate: new Date("2023-03-01"),
        github: "https://github.com/PassgenixTeam/home-lab-ai",
        youtube: "https://www.youtube.com/embed/nL43ijikK8M?si=W-d5Y2BtMeYMQLvM",
    },
    {
        name: "Passgenix Solutions: The Rike",
        filterCategories: [ProjectFilterCategory.ALL, ProjectFilterCategory.PASSGENIX_SOLUTIONS, ProjectFilterCategory.WEB_DEVELOPMENT, ProjectFilterCategory.DATA_ANALYZING],
        description: "Bring products of Vietnamese farmers to the US market.",
        thumbnail: "/img/projects/passgenix-the-rike/thumbnail.jpg",
        clientLogo: "/img/clients/the-rike.png",
        position: "Full-stack Developer",
        techStacks: ["NextJS (Client website)", "Shopify", "Amazon for Retailer (E-commerce platform)", "NestJS (BE)", "AppSheet (Admin)", "MongoDB"],
        slug: "passgenix-the-rike",
        date: "Feb.2023 – Present",
        endDate: new Date(),
        imageUrl: "/img/projects/passgenix-the-rike/image.jpg",
        website: "https://www.therike.us",
    },
];
