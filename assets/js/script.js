$(document).ready(function () {
    var showChar = 250;
    var ellipsestext = "...";
    var moretext = "Read more";
    var lesstext = "Read less";
    $('.more').each(function () {
        var content = $(this).html();

        if (content.length > showChar) {

            var c = content.substr(0, showChar);
            var h = content.substr(showChar - 1, content.length - showChar);

            var html = c + '<span class="moreellipses">' + ellipsestext +
                '&nbsp;</span><span class="morecontent"><span>' + h +
                '</span>&nbsp;&nbsp;<a href="" class="morelink more-color d-block text-right">' +
                moretext +
                '</a></span>';

            $(this).html(html);
        }

    });

    $(".morelink").click(function () {
        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).removeClass("less-color");
            $(this).addClass("more-color")
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).removeClass("more-color");
            $(this).addClass("less-color")
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});

setTimeout(() => {
    const swiper1 = new Swiper('.swiper1', {
        // Optional parameters
        spaceBetween: 10,
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 3000,
        },
        keyboard: false,
        simulateTouch: false,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination1',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    $(".swiper1").mouseenter(function () {
        swiper1.autoplay.stop();
    });

    $(".swiper1").mouseleave(function () {
        swiper1.autoplay.start();
    });

    const swiper2 = new Swiper('.swiper2', {
        // Optional parameters
        spaceBetween: 10,
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 3000,
        },
        keyboard: false,
        simulateTouch: false,

    });

    $(".swiper2").mouseenter(function () {
        swiper2.autoplay.stop();
    });

    $(".swiper2").mouseleave(function () {
        swiper2.autoplay.start();
    });
});