import { GatsbySSR } from "gatsby";
import React from "react";

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setBodyAttributes, setPostBodyComponents }) => {
    setBodyAttributes({
        className: "page",
    });

    // Put the scripts of the third-party libraries here
    setPostBodyComponents([
        <script src="/js/jquery-3.5.1.min.js"></script>,
        <script src="/js/imagesloaded.pkgd.min.js"></script>,
        <script src="https://www.google.com/recaptcha/api.js"></script>,
        <script src="/js/bootstrap.min.js"></script>,
        <script src="/js/modernizr.custom.js"></script>,
        <script src="/js/jquery.shuffle.min.js"></script>,
        <script src="/js/masonry.pkgd.min.js"></script>,
        <script src="/js/owl.carousel.min.js"></script>,
        <script src="/js/jquery.magnific-popup.min.js"></script>,
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCrDf32aQTCVENBhFJbMBKOUTiUAABtC2o"></script>,
        <script src="/js/jquery.googlemap.js"></script>,
        <script src="/js/validator.js"></script>,
    ]);
};
