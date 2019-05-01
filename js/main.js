'use strict';

(function($){
    $(document).ready(function() {
        $('.slider').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            variableWidth: true,
            infinite: true
        });
    });
})(jQuery);
