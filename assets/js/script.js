$(document).ready(function(){
    const windowWidth = $(window).width();
    console.log(windowWidth)
    var header = $('.header');
    var headerLogo = $('.header__logo');
    //Header-fixed
    $(window).scroll(function(){
        if($(this).scrollTop() > 1) {
            header.addClass('fixed-top');
        } else {
            header.removeClass('fixed-top')
        }
    });
    //Header-logo
    if(windowWidth <= 960) {
        headerLogo.addClass('active')
    } else {
        headerLogo.removeClass('active')
    }
    // Work
    if(windowWidth <= 960 & windowWidth >= 640) {
        $('.work__block--6 > img').attr('src', 'assets/images/details/6-1.jpg');
    }
});