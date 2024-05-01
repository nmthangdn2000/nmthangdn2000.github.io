jQuery(document).ready(function ($) {
    $(".portfolio-page-carousel").imagesLoaded(function () {
        $(".portfolio-page-carousel").owlCarousel({
            smartSpeed: 1200,
            items: 1,
            loop: true,
            dots: true,
            nav: true,
            navText: false,
            margin: 10,
            autoHeight: true,
        });
    });
});
