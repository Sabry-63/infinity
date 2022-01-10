$(function () {
    "use strict";
    $(window).load(function () {
        $(".reload").css("display", "none");
    });

    $("body a").click(function (e) {
        e.preventDefault();
    });

    // When Scroll body Sticky Nav bar
    $(window).scroll(function () {
        const scroll = $(this).scrollTop(),
            heightHead = $("header").innerHeight();
        //add class in nav
        if (scroll > heightHead) {
            $(".upPage").fadeIn();
            if ($("nav").hasClass() !== "fixed-top") {
                $("nav").addClass("fixed-top animate__animated animate__fadeInDown");
            }
        } else {
            $("nav").removeClass("fixed-top animate__animated animate__fadeInDown");
            $(".upPage").fadeOut();
        }
        if ($(".navbar-collapse").hasClass() !== "show") {
            $(".navbar-collapse").removeClass("show");
            $(".navbar-toggler").addClass("collapsed");
        }
    });

    //Go to Element
    $(".linkNav").click(function (e) {
        const heightNav = $("nav").innerHeight();
        $("html, body").animate(
            {
                scrollTop: $("#" + $(this).data("scroll")).offset().top - heightNav,
            },
            2000
        );
        $(".navbar-collapse").removeClass("show");
        $(".navbar-toggler").addClass("collapsed");
    });

    // Show Section
    $(".store .toggle-link").click(function (e) {
        let ele = $(this).data("set");
        $(this).parent(".icons").addClass("active").siblings().removeClass("active");
        $("#" + ele)
            .fadeIn()
            .removeClass("hidden")
            .siblings(".dash")
            .hide()
            .addClass("hidden");
    });

    // Start Function Btn Go To Top Page
    $(".upPage").click(function () {
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            2000
        );
    });
    // End Function Btn Go To Top Page

    $(".work-slider").slick({
        rtl: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    $(".about-slider").slick({
        rtl: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        prevArrow: '  <i class="fa fa-chevron-left" aria-hidden="true"></i>',
        nextArrow: '  <i class="fa fa-chevron-right" aria-hidden="true"></i>',
    });

    $('[data-toggle="tooltip"]').tooltip();
});
