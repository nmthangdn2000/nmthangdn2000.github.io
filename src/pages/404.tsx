import { HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import PageHead from "../components/page-head/page-head";
import PageBody from "../components/page-body/page-body";

const NotFoundPage: React.FC<PageProps> = () => {
    return (
        <PageBody>
            <div id="content" className="page-content site-content single-post" role="main">
                <div className="page-content">
                    <h1 className="nf-page-title">404</h1>
                    <p>It looks like nothing was found at this location.</p>
                </div>
            </div>
        </PageBody>
    );
};

export default NotFoundPage;

export const Head: HeadFC = () => <PageHead title="Not Found" />;
