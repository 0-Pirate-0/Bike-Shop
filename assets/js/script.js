$(document).ready(function(){
    const windowWidth = $(window).width();
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
    //Nav-toggle
    $('.nav_toggle').click(function(event){
        $('.nav_toggle, .nav').toggleClass('active');
    });
     /* Collapse */
     $("[data-collapse]").on("click", function(event) {
         event.preventDefault();
         
         var $this = $(this), 
             blockId = $this.data("collapse");
         
         $this.toggleClass("active");
     }); 
    // Work
    if(windowWidth <= 960 & windowWidth >= 640) {
        $('.work__block--6 > img').attr('src', 'assets/images/details/6-1.jpg');
    }
});