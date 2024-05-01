import { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import PageBody from "../components/page-body/page-body";
import PageHead from "../components/page-head/page-head";
import { ProjectFilterCategory, projects } from "../data/projects.data";

const ProjectPage: React.FC<PageProps> = () => {
    return (
        <PageBody>
            <div className="page-title">
                <h1>My Projects</h1>
                <div className="page-subtitle">
                    <h4>What I have done recently</h4>
                </div>
            </div>

            <div id="content" className="page-content site-content single-post" role="main">
                <div className="row">
                    <div className=" col-xs-12 col-sm-12 ">
                        {/* <!-- Portfolio Content --> */}
                        <div id="portfolio_content_q" className="portfolio-content">
                            <ul className="portfolio-filters">
                                <li className="active">
                                    <a className="filter btn btn-sm btn-link" data-group={ProjectFilterCategory.ALL}>
                                        All
                                    </a>
                                </li>

                                <li>
                                    <a className="filter btn btn-sm btn-link" data-group={ProjectFilterCategory.PERSONAL}>
                                        Personal
                                    </a>
                                </li>

                                <li>
                                    <a className="filter btn btn-sm btn-link" data-group={ProjectFilterCategory.PASSGENIX_SOLUTIONS}>
                                        Passgenix Solutions
                                    </a>
                                </li>

                                <li>
                                    <a className="filter btn btn-sm btn-link" data-group={ProjectFilterCategory.NAPA_GLOBAL}>
                                        NAPA Global
                                    </a>
                                </li>
                                <li>
                                    <a className="filter btn btn-sm btn-link" data-group={ProjectFilterCategory.WEB_DEVELOPMENT}>
                                        Web Development
                                    </a>
                                </li>
                                <li>
                                    <a className="filter btn btn-sm btn-link" data-group={ProjectFilterCategory.MOBILE_DEVELOPMENT}>
                                        Mobile Development
                                    </a>
                                </li>
                                <li>
                                    <a className="filter btn btn-sm btn-link" data-group={ProjectFilterCategory.AI_AND_ML}>
                                        AI & ML
                                    </a>
                                </li>
                                <li>
                                    <a className="filter btn btn-sm btn-link" data-group={ProjectFilterCategory.DATA_ANALYZING}>
                                        Data Analyzing
                                    </a>
                                </li>
                                <li>
                                    <a className="filter btn btn-sm btn-link" data-group={ProjectFilterCategory.BLOCKCHAIN}>
                                        Blockchain
                                    </a>
                                </li>
                            </ul>

                            {/* <!-- Portfolio Grid --> */}
                            <div className="portfolio-grid two-columns shuffle">
                                {projects.map((project) => (
                                    <figure key={project.name} className="item standard" data-groups={JSON.stringify(project.filterCategories)}>
                                        <div className="portfolio-item-img">
                                            <img src={project.thumbnail} alt={project.name} title={project.name} />
                                            <a href={project.slug}></a>
                                        </div>

                                        <h4 className="name">{project.name}</h4>
                                        <p className="description">{project.description}</p>
                                        <span className="category text-ellipsis">{project.position}</span>
                                    </figure>
                                ))}
                            </div>
                            {/* <!-- /Portfolio Content --> */}
                        </div>
                    </div>
                </div>
            </div>
        </PageBody>
    );
};

export default ProjectPage;

export const Head: HeadFC = () => <PageHead title="Projects" />;
