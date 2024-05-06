import * as React from "react";

const PageBody: React.FC<{
    children?: React.ReactNode;
}> = ({ children }) => {
    React.useEffect(() => {
        // Put custom scripts here
        const scriptInfos: Record<string, { path: string } & Record<string, any>> = {
            main_js: {
                path: "/js/main.js",
            },
        };

        Object.keys(scriptInfos).forEach((key) => {
            const scriptInfo = scriptInfos[key];

            document.getElementById(key)?.remove();

            const script = document.createElement("script");
            script.id = key;
            script.src = scriptInfo.path;
            if (scriptInfo.type) script.type = scriptInfo.type;

            document.body.appendChild(script);
        });
    }, []);

    return (
        <>
            <div className="lm-animated-bg"></div>

            {/* <!-- Loading animation --> */}
            <div className="preloader">
                <div className="preloader-animation">
                    <div className="preloader-spinner"></div>
                </div>
            </div>
            {/* <!-- /Loading animation --> */}

            {/* <!-- Scroll To Top Button --> */}
            <div className="lmpixels-scroll-to-top">
                <i className="lnr lnr-chevron-up"></i>
            </div>
            {/* <!-- /Scroll To Top Button --> */}

            <div className="page-scroll">
                <div id="page_container" className="page-container bg-move-effect" data-animation="transition-flip-in-right">
                    {/* <!-- Header --> */}
                    <header id="site_header" className="header">
                        <div className="header-content clearfix">
                            {/* <!-- Text Logo --> */}
                            <div className="text-logo">
                                <a href="/">
                                    <div className="logo-symbol">T</div>
                                    <div className="logo-text">
                                        Thang <span>Nguyen</span>
                                    </div>
                                </a>
                            </div>
                            {/* <!-- /Text Logo --> */}

                            {/* <!-- Navigation --> */}
                            <div className="site-nav mobile-menu-hide">
                                <ul className="leven-classic-menu site-main-menu">
                                    <li className="menu-item">
                                        <a href="/">About Me</a>
                                    </li>

                                    <li className="menu-item">
                                        <a href="/resume">Resume (CV)</a>
                                    </li>

                                    <li className="menu-item">
                                        <a href="/projects">Projects</a>
                                    </li>

                                    <li className="menu-item">
                                        <a href="/contact">Contact</a>
                                    </li>
                                </ul>
                            </div>

                            {/* <!-- Mobile Menu Toggle --> */}
                            <a className="menu-toggle mobile-visible">
                                <i className="fa fa-bars"></i>
                            </a>
                            {/* <!-- Mobile Menu Toggle --> */}
                        </div>
                    </header>
                    {/* <!-- /Header --> */}

                    <main id="main" className="site-main">
                        <div id="main-content" className="single-page-content">
                            <div id="primary" className="content-area">
                                {children}
                            </div>
                        </div>
                    </main>

                    {/* <!-- Footer --> */}
                    <footer className="site-footer clearfix">
                        <div className="footer-social">
                            <ul className="footer-social-links">
                                <li>
                                    <a href="https://github.com/nmthangdn2000" target="_blank">
                                        Github
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.facebook.com/minh.thang.03112000" target="_blank">
                                        Facebook
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-copyrights">
                            <p>Nguyen Minh Thang - Full-stack Developer</p>
                        </div>
                    </footer>
                    {/* <!-- /Footer --> */}
                </div>
            </div>
        </>
    );
};

export default PageBody;
