// $(document).foundation();

jQuery(document).ready(function($){

    // vertical centered content
    $('.js-centered').flexVerticalCenter({ cssAttribute: 'padding-top' });

    // slick slider for testimonials section
    $('.slider-testimonials').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5500,
        dots: true,
        infinite: true,
        slide: '.testimonial'
    });

    // open external link w/o target _blank
    $('a[rel="external"]')
      .click( function() {
        window.open( $(this).attr('href') );
      return false;
    });

});