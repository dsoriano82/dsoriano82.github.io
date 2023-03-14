 
'use strict';

jQuery(document).ready(function ($) {

    var lastId,
    topMenu = $("#top-navigation"),
    topMenuHeight = topMenu.outerHeight(),
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function () {
            var href = $(this).attr("href");
            if(href.indexOf("#") === 0){
                var item = $($(this).attr("href"));
                if (item.length) {
                    return item;
                }
            }
        });

    $(window).scroll(function () {

        //Display or hide menu header 
        if ($(this).scrollTop() > 239) {
            $('.navbar').addClass('animated fadeInDown menu2');
        } else {
            $('.navbar').removeClass('animated fadeInDown menu2');
        }
		
    });

    // Slidebar menu function
    $(document).ready(function() {
		$.slidebars({
			siteClose: true,
			disableOver: 992,
			hideControlClasses: false,
			scrollLock: true
		});
	});
    
})



