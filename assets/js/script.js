$(document).ready(function () {
    const windowWidth = $(window).width();
    var header = $('.header');
    var headerLogo = $('.header__logo');

    //Header-fixed
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            header.addClass('fixed-top');
        } else {
            header.removeClass('fixed-top')
        }
    });

    //Header-logo
    if (windowWidth <= 960) {
        headerLogo.addClass('active')
    } else {
        headerLogo.removeClass('active')
    }

    //Nav-toggle
    $('.nav_toggle').click(function (event) {
        $('.nav_toggle, .nav').toggleClass('active');
    });

    /* Scrool */
    $('[href^="#"]').on('click', function (event) {
        if ($(this).attr('hash') !== "") {
            event.preventDefault();
            let hash = $(this).prop('hash');
            $('html, body').animate({
                scrollTop: $(hash).offset().top - header.innerHeight()
            }, 800, function () {});
        }
    });

    // Work
    if (windowWidth <= 960 & windowWidth >= 640) {
        $('.work__block--6 > img').attr('src', 'assets/images/details/6-1.jpg');
    }

    // Slider
    $('.slider__inner').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});