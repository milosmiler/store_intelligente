$(document).ready(function () {
    console.log('iniciando js');
    $('.owl-carousel.owl-information').owlCarousel({
        margin: 25,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    $('.owl-carousel.owl-solution').owlCarousel({
        margin: 25,
        items: 1,
        loop: true,
        nav: false,
        dots: false,
        dots: true

    });

    $('.owl-carousel.owl-about').owlCarousel({
        items: 1,
        loop: false,
        margin: 10,
        URLhashListener: true,
        autoplay: true,
        startPosition: 'URLHash',
        smartSpeed: 750,
        startPosition: '#purpose',
        dots: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut'
    });

    var owl = $('.owl-carousel');
    owl.owlCarousel();
    $('.arrow.left').click(function (e) {
        owl.trigger('next.owl.carousel');
    });

    $('.arrow.right').click(function (e) {
        owl.trigger('prev.owl.carousel', [300]);
    });

    $(".accordion-wrap").on("click", function () {
        $(this).children().eq(1).slideToggle(300);
        $(this).children().eq(0).toggleClass("accordion-no-bar");
        $(this).siblings().find(".accordion-header").removeClass("accordion-gold");
        $(this).siblings().find(".accordion-header i").removeClass("rotate-fa");
        $(this).find(".accordion-header").toggleClass("accordion-gold");
        $(this).find(".fa").toggleClass("rotate-fa");

        $(".accordion-wrap .accordion-text").not($(this).children().eq(1)).slideUp(300);
    });
});