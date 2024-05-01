import { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import PageBody from "../components/page-body/page-body";
import PageHead from "../components/page-head/page-head";
import { projects } from "../data/projects.data";

const ProjectDetailPage: React.FC<PageProps<unknown, (typeof projects)[0]>> = ({ pageContext }) => {
    const projectIndex = projects.findIndex((project) => project.name === pageContext.name);
    const nextProject = projects[(projectIndex + 1) % projects.length];
    const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];

    React.useEffect(() => {
        const key = "project_detail_js";
        document.getElementById(key)?.remove();

        const script = document.createElement("script");
        script.id = key;
        script.src = "/js/project-detail.js";

        document.body.appendChild(script);
    }, []);

    return (
        <PageBody>
            <div id="content" className="page-content site-content single-post" role="main">
                <div id="ajax-page" className="ajax-page-content mt-4">
                    <div className="ajax-page-wrapper">
                        <div className="ajax-page-nav">
                            <div className="nav-item ajax-page-prev-next">
                                <a href={`/projects/${prevProject.slug}`}>
                                    <i className="lnr lnr-chevron-left"></i>
                                </a>
                                <a href={`/projects/${nextProject.slug}`}>
                                    <i className="lnr lnr-chevron-right"></i>
                                </a>
                            </div>
                            <div className="nav-item ajax-page-close-button">
                                <a id="ajax-page-close-button" href="/projects">
                                    <i className="lnr lnr-cross"></i>
                                </a>
                            </div>
                        </div>

                        <div className="ajax-page-title">
                            <h1>{pageContext.name}</h1>
                        </div>

                        <div className="row">
                            <div className="col-sm-8 col-md-8 portfolio-block">
                                {pageContext.imageUrl && (
                                    <div className="owl-carousel portfolio-page-carousel" data->
                                        <div className="item">
                                            <img src={pageContext.imageUrl} alt={pageContext.name} />
                                        </div>
                                    </div>
                                )}

                                {pageContext.youtube && (
                                    <div className="portfolio-page-video embed-responsive embed-responsive-16by9">
                                        <iframe className="embed-responsive-item" src={pageContext.youtube} title={pageContext.name}></iframe>
                                    </div>
                                )}

                                <script src="./index.js" type="text/javascript"></script>
                            </div>

                            <div className="col-sm-4 col-md-4 portfolio-block">
                                {/* <!-- Project Description --> */}
                                <div className="project-description">
                                    <div className="block-title">
                                        <h3>Description</h3>
                                    </div>
                                    <ul className="project-general-info">
                                        <li>
                                            <p>
                                                <i className="fa fa-calendar"></i> {pageContext.date}
                                            </p>
                                        </li>
                                    </ul>

                                    <p>{pageContext.description}</p>
                                    {/* <!-- /Project Description --> */}

                                    {/* <!-- Technology --> */}
                                    <div className="tags-block">
                                        <div className="block-title">
                                            <h3>Technology</h3>
                                        </div>
                                        <ul className="tags">
                                            {pageContext.techStacks.map((techStack) => (
                                                <li key={techStack}>
                                                    <a href="#">{techStack}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* <!-- /Technology --> */}

                                    {/* <!-- Share Buttons --> */}
                                    <div className="btn-group share-buttons">
                                        {pageContext.github && (
                                            <a href={pageContext.github} target="_blank" className="btn">
                                                <i className="fab fa-github"></i>{" "}
                                            </a>
                                        )}

                                        {pageContext.website && (
                                            <a href={pageContext.website} target="_blank" className="btn">
                                                <i className="fas fa-website"></i>{" "}
                                            </a>
                                        )}
                                    </div>
                                    {/* <!-- /Share Buttons --> */}
                                </div>
                                {/* <!-- Project Description --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageBody>
    );
};

export default ProjectDetailPage;

export const Head: HeadFC = () => <PageHead title="Project Detail" />;
