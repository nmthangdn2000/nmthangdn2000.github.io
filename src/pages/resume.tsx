import { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import PageBody from "../components/page-body/page-body";
import PageHead from "../components/page-head/page-head";
import { upperCaseFirstLetter } from "../utilities/text.util";
import cls from "classnames";

const ResumePage: React.FC<PageProps> = () => {
    const codingSkillInfos = {
        beginner: {
            level: 1,
            tooltip: "Know the basics, but not much experience",
        },
        intermediate: {
            level: 2,
            tooltip: "Have some experience, easily with common tasks",
        },
        advanced: {
            level: 3,
            tooltip: "Familiar with libraries and frameworks, can work independently",
        },
    };

    const codingSkillsContents: {
        name: string;
        level: keyof typeof codingSkillInfos;
    }[] = [
        {
            name: "HTML / CSS",
            level: "advanced",
        },
        {
            name: "JavaScript / TypeScript",
            level: "advanced",
        },
        {
            name: "React Native / ReactJS / NextJS",
            level: "advanced",
        },
        {
            name: "NodeJS / ExpressJS / NestJS",
            level: "advanced",
        },
        {
            name: "Flutter",
            level: "intermediate",
        },
        {
            name: "MongoDB",
            level: "intermediate",
        },
        {
            name: "SQL",
            level: "intermediate",
        },
    ];

    const otherSkillInfos = {
        beginner: {
            level: 1,
        },
        intermediate: {
            level: 2,
        },
        advanced: {
            level: 3,
        },
    };

    const otherSkillsContents: {
        name: string;
        level: keyof typeof otherSkillInfos;
        tooltip: string;
    }[] = [
        {
            name: "Git / GitHub / GitLab / Bitbucket",
            level: "advanced",
            tooltip: "Familiar with Git commands and workflows",
        },
        {
            name: "Docker",
            level: "intermediate",
            tooltip: "Familiar with Docker",
        },
        {
            name: "CI/CD",
            level: "intermediate",
            tooltip: "Familiar with CI/CD",
        },
        {
            name: "Design Database",
            level: "intermediate",
            tooltip: "Familiar with design database",
        },
        {
            name: "Problem Solving",
            level: "intermediate",
            tooltip: "Good at problem solving",
        },
        {
            name: "Teamwork",
            level: "intermediate",
            tooltip: "Good at teamwork",
        },
    ];

    return (
        <PageBody>
            <div className="page-title">
                <h1>Nguyen Minh Thang</h1>
                <div className="page-subtitle">
                    <h4>About 2 Years of Experience</h4>
                </div>
            </div>

            <div id="content" className="page-content site-content single-post" role="main">
                <div className="row">
                    <div className=" col-xs-12 col-sm-6 ">
                        <div className="block-title">
                            <h2>Education</h2>
                        </div>

                        <div id="timeline_1" className="timeline clearfix">
                            <div className="timeline-item clearfix">
                                <h5 className="item-period">2018 - 2023</h5>
                                <a href="https://vku.udn.vn/" target="_blank" className="item-company">
                                    Vietnam–Korea University of Information and Communication Technology (VKU)
                                </a>
                                <h4 className="item-title">Software Engineer</h4>
                                <p>
                                    <strong>GPA:</strong> 3.15/4.0
                                </p>
                                <p>Merges computer science with engineering practices, empowering to design, develop, and implement robust software systems.</p>
                                <p>Participate in many researches and contests. Learned how to build a software by combining technology and SDLC.</p>
                            </div>

                            <div className="timeline-item clearfix">
                                <h5 className="item-period">2022 - 2023</h5>
                                <a href="https://mindx.edu.vn/" target="_blank" className="item-company">
                                    Mindx - Technology School
                                </a>
                                <h4 className="item-title">Mobile App (React Native)</h4>
                                <p>
                                    Dive into the world of React Native app development. Gain expertise in UI design, navigation, and deployment to create polished cross-platform
                                    applications.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className=" col-xs-12 col-sm-6 ">
                        <div className="block-title">
                            <h2>Experience</h2>
                        </div>

                        <div id="timeline_2" className="timeline clearfix">
                            <div className="timeline-item clearfix">
                                <h5 className="item-period">2023 - Current</h5>
                                <a href="https://dut.udn.vn/khoacntt" target="_blank" className="item-company">
                                    VACS Vietnam Limited Liability Company
                                </a>
                                <h4 className="item-title">Full-Stack Web Developer:</h4>
                                <p>
                                    As a full-stack developer, I've handled frontend and backend tasks in software outsourcing projects. I've also ventured into developing
                                    immersive 3D web applications and web panorama experiences. Implementing CI/CD pipelines via GitHub, GitLab and Docker has been crucial for
                                    ensuring reliable deployment
                                </p>
                                <p>
                                    Moreover, I've established an internal GitLab server to streamline our development workflows and ensure secure version control within our
                                    organization.
                                </p>
                            </div>

                            <div className="timeline-item clearfix">
                                <h5 className="item-period current">2022 - 2023</h5>
                                <a href="http://lssvietnam.com/" target="_blank" className="item-company">
                                    LSS VIETNAM TECHNOLOGY AND SERVICES
                                </a>
                                <h4 className="item-title">Full-stack Developer</h4>
                                <p>
                                    <strong>Full-Stack Web Developer:</strong>
                                    As a fullstack developer, contributed to software outsourcing projects, handling both frontend and backend tasks. Implemented CI/CD pipelines
                                    via GitHub, GitLab and Docker for automated deployment to production, ensuring reliable delivery.
                                </p>
                                <p>
                                    <strong>Tech stack: </strong> Utilized NestJS and Next.js for backend and frontend development, incorporating Socket.io for real-time
                                    functionality. Integrated payment gateways such as Stripe and PayPal for enhanced functionality.
                                </p>
                            </div>

                            <div className="timeline-item clearfix">
                                <h5 className="item-period">2022 - 2023</h5>
                                <a href="https://passgenix.com" target="_blank" className="item-company">
                                    Passgenix Solutions
                                </a>
                                <h4 className="item-title">Co-founder & Technical Leader</h4>
                                <p>
                                    <strong>Strong Developer Team:</strong> Work closely with our developers and designers to translate creative vision into robust technical
                                    solutions. Strive to push boundaries and develop products that make a real impact.
                                </p>
                                <p>
                                    <strong>Follow Trend Technology:</strong> Guide the technical direction to ensure that our products are built with the latest technologies and
                                    best practices. Maintain the highest quality standards in our technological infrastructure and product development.
                                </p>
                                <p>
                                    Gained experience to leverage a deep understanding of the industry and its challenges. Constantly seeking innovative ways to advance our
                                    technology and its potential and using technology to solve real-world problems.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className=" col-xs-12 col-sm-12 ">
                        <div className="block-title p-20">
                            <h2>Certificates</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className=" col-xs-12 col-sm-6">
                        <a href="/img/resume/mobile-development-certificate.png" className="lightbox">
                            <div className="certificate-item clearfix">
                                <div className="certi-logo">
                                    <img src="/img/resume/mindx-logo.png" alt="logo" />
                                </div>

                                <div className="certi-content">
                                    <div className="certi-title">
                                        <h4>Mobile App Development</h4>
                                    </div>

                                    <div className="certi-id">
                                        <span>React Native</span>
                                    </div>
                                    <div className="certi-date">
                                        <span>30 July 2022</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="row">
                    <div className=" col-xs-12 col-sm-12 ">
                        <div className="p-40"></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <div className="block-title">
                            <h2>Coding Skills</h2>
                        </div>

                        <div className="skills-info skills-first-style">
                            {codingSkillsContents.map((skill, index) => {
                                const skillInfo = codingSkillInfos[skill.level];
                                return (
                                    <div key={index} className="clearfix">
                                        <h4>{skill.name}</h4>
                                        <div className="skill-value" data-bs-toggle="tooltip" data-bs-title={skillInfo.tooltip} data-bs-placement="right">
                                            <span className="d-none d-md-block">{upperCaseFirstLetter(skill.level)}</span>
                                            <div className="skill-level">
                                                {[...Array(3)].map((_, i) => (
                                                    <div key={index} className={cls("level-item", skillInfo.level >= i + 1 && `level-${i + 1}`)}></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-6">
                        <div className="block-title">
                            <h2>Other Skills</h2>
                        </div>

                        <div className="skills-info skills-first-style">
                            {otherSkillsContents.map((skill, index) => {
                                const skillInfo = otherSkillInfos[skill.level];
                                return (
                                    <div key={index} className="clearfix">
                                        <h4>{skill.name}</h4>
                                        <div className="skill-value" data-bs-toggle="tooltip" data-bs-title={skill.tooltip} data-bs-placement="right">
                                            <span className="d-none d-md-block">{upperCaseFirstLetter(skill.level)}</span>
                                            <div className="skill-level">
                                                {[...Array(3)].map((_, i) => (
                                                    <div key={index} className={cls("level-item", skillInfo.level >= i + 1 && `level-${i + 1}`)}></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </PageBody>
    );
};

export default ResumePage;

export const Head: HeadFC = () => <PageHead title="CV" />;
