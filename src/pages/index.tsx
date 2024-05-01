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
            icon: "linecons-data",
            title: "Data Analyzing",
            description:
                "With strong data analysis skills. Can clean, explore, and analyze complex datasets, leveraging statistical methods to uncover trends and patterns. Creating clear and compelling data visualizations to communicate findings effectively.",
        },
        {
            icon: "linecons-bulb",
            title: "AI Engineering",
            description:
                "Strong background in AI engineering. Bridge the gap between theoretical AI concepts and real-world applications. Skilled in building, deploying, and optimizing machine learning models, along with designing and managing the infrastructure.",
        },
        {
            icon: "linecons-world",
            title: "Blockchain",
            description:
                "Strong understanding of blockchain architecture, cryptography principles, and smart contracts. Allows to develop innovative blockchain-based solutions, integrate them with existing systems, and ensure their security and efficiency.",
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
            name: "Python",
            logo: "/img/programming-languages/python-logo.png",
            link: "https://www.python.org",
        },
        {
            name: "C#",
            logo: "/img/programming-languages/c-sharp-logo.png",
            link: "https://docs.microsoft.com/en-us/dotnet/csharp",
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
            name: "Tensorflow",
            logo: "/img/programming-languages/tensorflow-logo.png",
            link: "https://www.tensorflow.org",
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

                                            <div className="item">
                                                <h4>AI Engineer</h4>
                                            </div>

                                            <div className="item">
                                                <h4>Blockchain Developer</h4>
                                            </div>
                                        </div>

                                        <h1>Nguyen Le Anh Minh</h1>
                                        <p>
                                            Eager to adopt and learn new technologies. Enthusiastic to attend a Master of Computer Science in order to understand and apply
                                            different Computer Science concepts.
                                        </p>

                                        <div className="home-buttons">
                                            <a href="/assets/NguyenLeAnhMinh_CV.pdf" download="NguyenLeAnhMinh_CV.pdf" className="btn btn-primary">
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
