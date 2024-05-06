import { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import PageBody from "../components/page-body/page-body";
import PageHead from "../components/page-head/page-head";
import { projects } from "../data/projects.data";

const HomePage: React.FC<PageProps> = () => {
    const whatICanDoContents = [
        {
            icon: "linecons-display",
            title: "Full-stack Development",
            description:
                "Well-versed in both front-end technologies like HTML, CSS, and JavaScript, and back-end languages and frameworks. Implement user-friendly interfaces, build robust functionality, and ensure seamless data handling within web applications.",
        },
        {
            icon: "linecons-settings",
            title: "DevOps & Automation",
            description:
                "Skilled in setting up CI/CD pipelines with GitLab and GitHub Actions, leveraging Docker for efficient containerization. Collaborate with teams to automate testing, code reviews, and deployment workflows, ensuring reliable and rapid software releases.",
        },
        {
            icon: "linecons-diamond",
            title: "3D Web Development",
            description:
                "Skilled in crafting immersive 3D web experiences featuring panoramic views and seamlessly interacting with intricate 3D models using Three.js and WebGL, ensuring engaging user experiences and dynamic digital environments.",
        },
        {
            icon: "linecons-phone",
            title: "Mobile Development",
            description:
                "Skilled in cross-platform mobile development with React Native and Flutter, I leverage reusable code for efficient development and prioritize intuitive UIs to build high-performing, native-feeling apps for both iOS and Android.",
        },
    ];

    const latestProjectsContents = [...projects].sort((a, b) => b.endDate.getTime() - a.endDate.getTime()).slice(0, 3);

    const languagesAndFrameworksContents = [
        {
            name: "HTML",
            logo: "/img/programming-languages/html-logo.png",
            link: "https://www.w3.org/html",
        },
        {
            name: "CSS",
            logo: "/img/programming-languages/css-logo.png",
            link: "https://www.w3.org/style/css",
        },
        {
            name: "JavaScript",
            logo: "/img/programming-languages/js-logo.png",
            link: "https://www.javascript.com",
        },
        {
            name: "TypeScript",
            logo: "/img/programming-languages/typescript-logo.png",
            link: "https://www.typescriptlang.org",
        },
        {
            name: "NodeJS",
            logo: "/img/programming-languages/nodejs-logo.png",
            link: "https://nodejs.org",
        },
        {
            name: "NestJS",
            logo: "/img/programming-languages/nestjs-logo.png",
            link: "https://nestjs.com",
        },
        {
            name: "ReactJS",
            logo: "/img/programming-languages/reactjs-logo.png",
            link: "https://reactjs.org",
        },
        {
            name: "NextJS",
            logo: "/img/programming-languages/nextjs-logo.png",
            link: "https://reactjs.org",
        },
        {
            name: "Flutter",
            logo: "/img/programming-languages/flutter-logo.png",
            link: "https://flutter.dev",
        },
        {
            name: "PostgreSQL",
            logo: "/img/programming-languages/postgresql-logo.png",
            link: "https://www.postgresql.org",
        },
        {
            name: "MongoDB",
            logo: "/img/programming-languages/mongodb-logo.png",
            link: "https://www.mongodb.com",
        },
    ];

    return (
        <PageBody>
            <div id="content" className="page-content site-content single-post" role="main">
                {/* <!-- Home Page Top Part --> */}
                <div className="row">
                    <div className=" col-xs-12 col-sm-12">
                        <div className="home-content">
                            <div className="row flex-v-align">
                                <div className="col-sm-12 col-md-5 col-lg-5">
                                    <div className="home-photo">
                                        <div
                                            className="hp-inner"
                                            style={{
                                                backgroundImage: "url(/img/main_photo.jpg)",
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-7 col-lg-7">
                                    <div className="home-text hp-left">
                                        <div className="owl-carousel text-rotation">
                                            <div className="item">
                                                <h4>Full-stack Developer</h4>
                                            </div>
                                        </div>

                                        <h1>Nguyen Minh Thang</h1>
                                        <p>
                                            Always eager to learn and adapt, I focus on mastering software engineering principles and embracing new technologies for impactful
                                            solutions.
                                        </p>

                                        <div className="home-buttons">
                                            <a href="/assets/NguyenMinhThang_CV.pdf" download="NguyenMinhThang_CV.pdf" className="btn btn-primary">
                                                Download CV
                                            </a>
                                            <a href="/contact" target="_self" className="btn btn-secondary">
                                                Contact Me
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Home Page Top Part --> */}

                {/* <!-- Services --> */}
                <div className="row">
                    <div className="col-xs-12 col-sm-12">
                        <div className="block-title p-50">
                            <h2>What I Can Do</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {whatICanDoContents.slice(0, 2).map((content) => (
                        <div key={content.title} className="col-xs-12 col-sm-6">
                            <div className="info-list-w-icon">
                                <div className="info-block-w-icon">
                                    <div className="ci-icon">
                                        <i className={`linecons ${content.icon}`}></i>
                                    </div>

                                    <div className="ci-text">
                                        <h4>{content.title}</h4>
                                        <p>{content.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {whatICanDoContents.slice(2, 4).map((content) => (
                        <div key={content.title} className="col-xs-12 col-sm-6">
                            <div className="info-list-w-icon">
                                <div className="info-block-w-icon">
                                    <div className="ci-icon">
                                        <i className={`linecons ${content.icon}`}></i>
                                    </div>

                                    <div className="ci-text">
                                        <h4>{content.title}</h4>
                                        <p>{content.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* <!-- /Services --> */}

                {/* <!-- Languages & Frameworks --> */}
                <div className="row">
                    <div className="col-xs-12 col-sm-12">
                        <div className="block-title p-20">
                            <h2>Languages & Frameworks</h2>
                        </div>

                        {/* <!-- Slider --> */}
                        <div id="clients_1" className="clients owl-carousel" data-mobile-items="1" data-tablet-items="3" data-items={languagesAndFrameworksContents.length}>
                            {languagesAndFrameworksContents.map((content) => (
                                <div key={content.name} className="client-block">
                                    <a href={content.link} target="_blank" title={content.name}>
                                        <img src={content.logo} alt={content.name} />
                                    </a>
                                </div>
                            ))}
                        </div>
                        {/* <!-- /Slider --> */}
                    </div>
                </div>
                {/* <!-- /Languages & Frameworks --> */}

                {/* <!-- Latest Projects --> */}
                <div className="row">
                    <div className=" col-xs-12 col-sm-12 ">
                        <div className="block-title p-20">
                            <h2>Latest Projects</h2>
                        </div>
                    </div>

                    {latestProjectsContents.map((content) => (
                        <div key={content.name} className=" col-xs-12 col-sm-9">
                            <a href={`/projects/${content.slug}`}>
                                <div className="project-items clearfix">
                                    <div className="project-item-logo d-none d-md-table-cell">
                                        <img src={content.clientLogo} alt="logo" />
                                    </div>
                                    <div className="project-item-content">
                                        <div className="project-item-content-logo d-md-none mb-4">
                                            <img src={content.clientLogo} alt="logo" />
                                        </div>

                                        <div className="project-item-title">
                                            <h4>{content.name}</h4>
                                        </div>

                                        <div className="project-item-description">
                                            <p>{content.description}</p>

                                            <p>
                                                <strong>Position:</strong> {content.position}
                                            </p>
                                        </div>

                                        <div className="project-item-tech-stacks">
                                            {content.techStacks.map((techStack) => (
                                                <span key={techStack}>{techStack}</span>
                                            ))}
                                        </div>

                                        <div className="project-item-date">{content.date}</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
                {/* <!-- /Latest Projects --> */}
            </div>
        </PageBody>
    );
};

export default HomePage;

export const Head: HeadFC = () => <PageHead />;
