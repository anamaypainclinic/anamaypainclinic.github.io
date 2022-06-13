!(function ($) {
    "use strict";
    $(window).on("scroll", function () {
        $(window).scrollTop() > 70
            ? $(".backtop").addClass("reveal")
            : $(".backtop").removeClass("reveal");
    });
    $(".portfolio-single-slider").slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2e3,
    });
    $(".clients-logo").slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        autoplaySpeed: 6e3,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 6, slidesToScroll: 6, infinite: true, dots: true },
            },
            { breakpoint: 900, settings: { slidesToShow: 4, slidesToScroll: 4 } },
            { breakpoint: 600, settings: { slidesToShow: 4, slidesToScroll: 4 } },
            { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 2 } },
        ],
    });
    $(".testimonial-wrap").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        vertical: true,
        verticalSwiping: true,
        autoplaySpeed: 6e3,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: true },
            },
            { breakpoint: 900, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    });
    $(".testimonial-wrap-2").slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6e3,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2, slidesToScroll: 2, infinite: true, dots: true },
            },
            { breakpoint: 900, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    });
    $(".counter-stat span").counterUp({ delay: 10, time: 1e3 });
    $(".js-scroll-trigger").click(function () {
        window.scrollTo(0, 0);
    });
    $("#contact-form").validate({
        rules: {
            email_from_name: { required: true },
            email_from_email: { required: true },
            email_subject: { required: true },
            phone: { digits: true },
            email_message: { required: true },
        },
        messages: {
            email_from_name: { required: "Please enter your name!" },
            email_from_email: { required: "Please enter your email!" },
            email_subject: { required: "Field cannot be empty!" },
            phone: { digits: "Please enter number only!" },
            email_message: { required: "Field cannot be empty!" },
        },
    });
    $("#contact-form").submit(function (event) {
        event.preventDefault();
        if ($("#contact-form").valid()) {
            var a = document.getElementById("contact-form");
            let b = new FormData(a);
            if (b.get("phone")) {
                let email_message = b.get("email_message");
                email_message += ` The phone number is ${b.get("phone")}.`;
                b.set("email_message", email_message);
            }
            $.ajax({
                url: "https://queser-email-hub.herokuapp.com/api/mail",
                type: "POST",
                data: b,
                processData: false,
                contentType:false,
                success: function (response) {
                    alert(response.message);
                    $("#contact-form").trigger("reset");
                },
            });
        }
    });
})(jQuery);
