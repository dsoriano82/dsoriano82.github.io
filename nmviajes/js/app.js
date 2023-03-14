// Fuente Roboto
$(document).ready(function(){
    WebFontConfig = {
        google:{families:['Roboto:400,300:latin']}
    };
    (function() {
        var wf = document.createElement('script');
        wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
    })();
})


// ocultar mostrar tarveler selection


 
// Collapse
$(document).ready(function() {
    var op1 = 1;
    $('.option').click(function () {
        $option = $(this);
        $collapse = $option.next();
        $collapse.slideToggle(500, function () {
            if (op1 == 1) {
                $("div.i-down").addClass("arrow-up"); 
                op1 = 0;
            }
            else {
                $("div.i-down").removeClass("arrow-up");
                op1 = 1;
            }
        });
    });

    var op2 = 1;
    $('.option2').click(function () {
        $option = $(this);
        $collapse = $option.next();
        $collapse.slideToggle(500, function () {
            if (op2 == 1) {
                $("div.icon-wobble").addClass("up");
                op2 = 0;
            }
            else {
                $("div.icon-wobble").removeClass("up");
                op2 = 1;
            }
        });
    });
})

// Fancybox
$(document).ready(function() {
    $(".subs").fancybox();
});
/*
$(document).ready(function() {
  $(".fancybox-thumb").fancybox({
    helpers : {
      title : {
        type: 'outside'
      },
      thumbs  : {
        width : 100,
        height  : 100
      }
    }
  });
});
*/

// Switch pantalla mode
$(document).ready(function() {
    var device = navigator.userAgent
            if (!(device.match(/Iphone/i)|| device.match(/Ipod/i)|| device.match(/Android/i)|| device.match(/J2ME/i)|| device.match(/BlackBerry/i)|| device.match(/iPhone|iPad|iPod/i)|| device.match(/Opera Mini/i)|| device.match(/IEMobile/i)|| device.match(/Mobile/i)|| device.match(/Windows Phone/i)|| device.match(/windows mobile/i)|| device.match(/windows ce/i)|| device.match(/webOS/i)|| device.match(/palm/i)|| device.match(/bada/i)|| device.match(/series60/i)|| device.match(/nokia/i)|| device.match(/symbian/i)|| device.match(/HTC/i)))
                {
                    document.getElementById("switch-view").style.display = "none"; 
                }
})

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

    // Bind to scroll
    $(window).scroll(function () {

        //Display or hide scroll to top button 
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }

        if ($(this).scrollTop() > 130) {
            $('.navbar').addClass('animated fadeInDown menu2');
        } else {
            $('.navbar').removeClass('animated fadeInDown menu2');
        }
		
		// clave para el error del headewr fixed 'navbar-fixed-top'

        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight + 10;

        // Get id of current scroll item
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });

        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
            .parent().removeClass("active")
            .end().filter("[href=#" + id + "]").parent().addClass("active");
        }
    });

    // Function for scroliing to top
    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    // Slidebar menu function
    $(document).ready(function() {
		$.slidebars({
			siteClose: true, // true or false
			disableOver: 979, // integer or false
			hideControlClasses: false, // true or false
			scrollLock: true // true or false
		});
	});

    $('.trigger').click(function() { 
       $('.traveler-selection').slideToggle();
    });
    
});



