
(function ($) {



    $(document).ready(function() {
    	imageSources = []
        $('img').each(function() {
            var sources = $(this).attr('src');
            imageSources.push(sources);
        });
        if($(imageSources).load()){
            $('.pre-loader').fadeOut('slow');
        }
    });


	
	$(window).load(function(){
      $("#navigation").sticky({ topSpacing: 0 });
    });



    $(function() {
        $(document).ready(function() {
            $.slidebars({
                disableOver: 768,
                hideControlClasses: true,
                scrollLock: true
            });
        });
    });



    $(function() {
        $(".foto, .video").css("opacity","0");
        $(".foto, .video").hover(function () {
            $(this).stop().animate({opacity: .7}, "slow");
        },
        function () {
            $(this).stop().animate({opacity: 0}, "slow");
        });
    });



    $(document).ready(function ($) {
        $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
            event.preventDefault();
            return $(this).ekkoLightbox({
                always_show_close: true
            });
        });
        $('#open-youtube').click(function (e) {
            e.preventDefault();
            $(this).ekkoLightbox();
        });
    });



    $(document).ready(function() {
        $("#principal").owlCarousel({
            navigation : true,
            pagination: false,
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem : true,
            autoPlay : 3000,
            stopOnHover : true,
            transitionStyle:"fade",
            responsive: true
        });
    });



    $(document).ready(function(){
        var slider = $('.bxslider').bxSlider({
            mode: 'fade',
            speed: 500,
            touchEnabled: true,
            infiniteLoop: true,
            auto: true,
            pager: false
        });
        
         $('.bx-pager-item a, .bx-controls-direction a').click(function(e){
            var i = $(this).attr("data-slide-index");
            slider.goToSlide(i);
            slider.stopAuto();
            restart=setTimeout(function(){
                slider.startAuto();
                },500);
            return false;
        });
        
    });



    $(document).ready(function() {
        $('a[href*=#]:not([href=#carousel-example-generic])' ).click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });



})(jQuery);
