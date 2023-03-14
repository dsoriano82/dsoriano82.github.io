/* ================================================
----------------- Kuper Main.js ------------- */
(function ($) {
	
	$(window).on('load', function() {
		$('.pre-loader').fadeOut('slow');
    });
	
	//$(document).ready(function() {
    //	imageSources = []
    //    $('img').each(function() {
    //        var sources = $(this).attr('src');
    //        imageSources.push(sources);
    //    });
    //    if($(imageSources).load()){
    //        $('.pre-loader').fadeOut('slow');
    //    }
    //});

	"use strict";
	var Kuper = {
		initialised: false,
		mobile: false,
		init: function () {

			if(!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}
			// Hide scroll animations
			this.hideScrollAnimElem();

			// Call Kuper Functions
			this.kmodal();
			this.modal2();
			this.checkMobile();
			this.fitvids();
			this.stickyHeader();
			this.sideMenu();
			this.slideBarsMenu();
			this.productZoom();
			this.searchFormToggle();
			this.quantityInputs();
			this.checkoutOPtionToggle();
			this.scrollToTop();
			this.scrollTo();
			this.reviewScroll();
			this.toggleCatFilterWidget();
			this.accordion();
			this.tooltip();
			this.popover();
			this.share ();

			/* Call function if Owl Carousel plugin is included */
			if ( $.fn.owlCarousel ) {
				this.owlCarousels();
			}

			/* Grid for category pages */
			if ( $.fn.isotope ) {
				this.categoryGrid();
			}

			if (typeof noUiSlider === "object") {
				this.filterSlider();	
			}

			/* Call masonry - isotope filder*/
			if ( $.fn.isotope ) {
				this.portfolio();
				this.portfolioFilter();
			}

			// Scroll Animations
			this.scrollAnim();

			// Count
			this.countTo();

		},
		kmodal: function () {
			$(window).on('load',function(){
				$('#subs').modal({
					show: true,
					//backdrop: 'static',
					keyboard: true,
				});
			});
		},
		modal2: function () {
			$('#edit-name,#edit-address,#add-address').on('show.bs.modal', function() {
			  setTimeout(function() {
				$('.modal-backdrop').css('background', 'white');
			  }, 10);
			});

			$('#edit-name,#edit-address,#add-address').on('hidden.bs.modal', function() {
			  $('.modal-backdrop').css('background', '');
			});
		},
		checkMobile: function () {
			/* Mobile Detect*/
			if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent ) ) {
				this.mobile = true;
			} else {
				this.mobile = false;
			}
		},
		fitvids: function() {
			if ( $.fn.fitVids ) {
				$('body').fitVids();
			}
		},
		stickyHeader: function () {
			// Sticky header - calls if sticky-header class is added to the header
			if ( $('.sticky-header').length ) {
				var sticky = new Waypoint.Sticky({
					element: $('.sticky-header')[0],
					stuckClass: 'fixed',
					offset: -170
				});
			}
		},
		sideMenu: function () {
			if ($.fn.metisMenu) {
				$('.metismenu').metisMenu();
			}
		},
		slideBarsMenu: function () {
			var controller = new slidebars();
			controller.init();
			$( '.js-toggle-left-slidebar' ).on( 'click', function ( event ) {
				event.stopPropagation();
				controller.toggle( 'slidebar' );
			} );
			$( controller.events ).on( 'opened', function () {
				$( '[class="sidemenu-overlay"]' ).addClass( 'js-close-any-slidebar' );
				$( 'body' ).addClass( 'over' );
			} );
			$( controller.events ).on( 'closed', function () {
				$( '[class="sidemenu-overlay js-close-any-slidebar"]' ).removeClass( 'js-close-any-slidebar' );
				$( 'body' ).removeClass( 'over' );
			} );
			$( 'body' ).on( 'click', '.js-close-any-slidebar', function ( event ) {
				event.stopPropagation();
				controller.close();
			} );
			
		},
		
		searchFormToggle: function () {
			// Toggle Search form for mobile
			$('.search-form-toggle').on('click', function (e) {
				$('.search-form-container').find('form').toggleClass('open');

				e.preventDefault();
			});
		},
		owlCarousels: function () {
			// Call each carousel with the class of owl-data-carousel 
			// Get the settings and init owl carousel
			
	        $.each($('.owl-data-carousel'), function(index) {
		    	var settings= {
						loop:true,
						margin: 30,
						navText: [],
						nav: true,
						dots:  false,
						autoplayHoverPause: true,
						autoplay: true,
						lazyLoad: false,
						items: 4,
						autoHeight: false,
						responsive:{
							0: {
								items:1
							},
							480: {
								items:2
							},
							768: {
								items:3
							},
							992: {
								items:3
							},
							1200: {
								items:4
							}
						},
						rtl: ( $('html').attr('dir') === "rtl" ) ? true : false
		    		},
			    	owlsettings,
			    	owlResponsive;

				owlsettings = $(this).data('owl-settings'),
				owlResponsive = $(this).data('owl-responsive');

				// If it is not object don't use new settings - data-owl-settings
				if (typeof owlsettings === "object") {
					settings = $.extend(true, {}, settings, owlsettings);
				}

				// If it is not object don't use responsive setting
				if (typeof owlResponsive === "object") {
					settings = $.extend(true, {}, settings, {
						responsive: owlResponsive
					});
				}

				// Clear if items:1 is set and there is no data-owl-responsive 
				if (typeof owlResponsive === 'undefined' && owlsettings.items <= 2) {
					settings.responsive = {};
				}

				$(this).owlCarousel(settings);
		    });
		},
		countTo: function () {
			// CountTo plugin used count animations for homepages
			if ( $.fn.countTo ) {
				if ($.fn.waypoint) {
					$('.count').waypoint( function () {
						$(this.element).countTo();
					}, {
						offset: '90%',
						triggerOnce: true 
					});
				} else {
					$('.count').countTo();
				}	
			} else { 
				// fallback if count plugin doesn't included
				// Get the data-to value and add it to element
				$('.count').each(function () {
					var $this = $(this),
						countValue = $this.data('to');
						$this.text(countValue);
				});
			}
		},
		toggleCatFilterWidget: function () {
			// Toggle Widgets for sidebar shop
			var widgetCat = $('.widget-shop-category'),
				widgetFilter = $('.widget-shop-filter');

			$('.btn-category').on('click', function (e) {
				if ( !widgetCat.hasClass('active') ) {
					widgetFilter.removeClass('active');
					widgetCat.addClass('active');
				}
				e.preventDefault();
			});

			$('.btn-filter').on('click', function (e) {
				if ( !widgetFilter.hasClass('active')) {
					widgetCat.removeClass('active');
					widgetFilter.addClass('active');
				}
				e.preventDefault();
			});
		},
		accordion: function () {
			// Toggle "open" Class for parent elem 
			// example: category accordion on category page
			$('.accordion').on('shown.bs.collapse', function(item) {
				var parent = $(item.target).closest('li');

				if ( !parent.hasClass('open') ) {
					parent.addClass('open');
				}
			}).on('hidden.bs.collapse', function (item) {
				var parent = $(item.target).closest('li');

				if ( parent.hasClass('open') ) {
					parent.removeClass('open');
				}
			});
		},
		tooltip: function () {
			// Bootstrap Tooltip
			if ( $.fn.tooltip ) {
				$('[data-toggle="tooltip"]').tooltip({
					animated: 'fade',
					placement: 'top',
					html: true
				});
			}
		},
		popover: function () {
			// Bootstrap Popover
			if ( $.fn.popover ) {
				$('[data-toggle="popover"]').popover({
					trigger: 'focus'
				});
			}
		},
		share: function () {
			$('.popup').click(function(event) {
			var width  = 570,
				height = 400,
				left   = ($(window).width()  - width)  / 2,
				top    = ($(window).height() - height) / 2,
				url    = this.href,
				opts   = 'status=1' +
						 ',width='  + width  +
						 ',height=' + height +
						 ',top='    + top    +
						 ',left='   + left;
			window.open(url, 'twitter', opts);
			return false;
			});
		},
		scrollBtnAppear: function () {
	        if ( $(window).scrollTop() >= 400 ) {
	            $('#scroll-top').addClass('fixed');
	        } else {
	            $('#scroll-top').removeClass('fixed');
	        }
		},
		scrollToTop: function () {
			$('#scroll-top').on('click', function (e) {
		        $('html, body').animate({
			            'scrollTop': 0
		        }, 1200);
				e.preventDefault();
			});
		},
		scrollTo: function() {
			// add .scrollto class 
			$('.scrollto').on('click', function (e) {
				var targetID = $(this).attr('href'),
					target = $(targetID);

				if (target.length) {
					// minus 90px for sticky header and a little spacing
					var targetPos = target.offset().top - 90;

					$('html, body').animate({
				            'scrollTop': targetPos
			        }, 1000);

					e.preventDefault();

				}
			});
		},
		reviewScroll: function() {
			// Scroll to review tab on product page
			$('.ratings-link').on('click', function (e) {
				var target = $('.product-details-tab');
				if (target.length) {
					// minus 90px for sticky header and a little spacing
					var targetPos = target.offset().top - 90;

					$('html, body').animate({
				            'scrollTop': targetPos
			        }, 800);

					$('.product-details-tab a[href="#reviews"]').tab('show');

					e.preventDefault();

				}
			});
		},
		quantityInputs: function() {
			// Quantity input - cart - product pages
			if ($.fn.TouchSpin) {
				// Cart Page
				$('.cart-product-quantity').TouchSpin({
					verticalbuttons: true,
					verticalupclass: 'fa fa-angle-up',
					verticaldownclass: 'fa fa-angle-down',
					initval: 1
				});

				// Product Page
				$('.single-product-quantity').TouchSpin({
					verticalbuttons: true,
					verticalupclass: 'glyphicon glyphicon-plus',
					verticaldownclass: 'glyphicon glyphicon-minus',
					initval: 1
				});
			}
		},
		checkoutOPtionToggle: function() {
			// Toggle Checkout - Payment options
			$('input[name="checkout-option"], input[name="payment-option"]').on('change', function () {
				var $this = $(this),
					parent = $this.closest('.tab-pane'),
					target = $this.data('target'),
					targetEl = $(target);

				if (targetEl.length) {
					parent.find('.target-area').removeClass('active');
					targetEl.addClass('active');
				}
			});
		},
		categoryGrid: function() {
			var container = $('.shop-container'),
				layoutMode = container.data('layout');

			if ( typeof imagesLoaded === 'function' ) {
				container.imagesLoaded(function () {
					container.isotope({
						itemSelector: '.product-item',
						layoutMode: (layoutMode) ? layoutMode : 'masonry'
					});
				});
			}
		},
		productZoom: function () {
			// Product Page Zoom Plugin
			if ($.fn.xzoom) {
				$('#product-zoom').xzoom({
					position: "right",
		            title: true,
		            tint: '#fff',
		            tintOpacity: 0.4
				});
			}

			$('.product-gallery').find('a').on('click', function (e) {
				var previewImg = $(this).data('image'),
					originalImg = $(this).data('zoom-image');

				$('#product-zoom')
					.attr('src', previewImg)
					.attr('data-xoriginal', originalImg);

				e.preventDefault();
			});
		},
		filterSlider:function () {
			// Slider For category pages / filter price
			var priceSlider  = document.getElementById('price-slider');

			// Check if #price-slider elem is exists if not return
			// to prevent error logs
			if (priceSlider == null) return;

			noUiSlider.create(priceSlider, {
				start: [ 50, 150 ],
				connect: true,
				step: 50,
				range: {
					'min': 0,
					'max': 400
				}
			});

			// Update Price Range
			priceSlider.noUiSlider.on('update', function( values, handle ){
				$('#filter-price-range').text(values.join(' - '));
			});
		},
		hideScrollAnimElem: function () {
			// Hide all items with the class .bb-scroll-anim // Cal this first
			if ($.fn.waypoint) {
				$('.scroll-anim').css('visibility', 'hidden');
			}
		},
		scrollAnim: function () {
			// Custom Scroll Animation with waypoint plugin // Call this kast
			if ($.fn.waypoint) {
				$('.scroll-anim').waypoint( function () {
					var anim = $(this.element).attr('data-anim'),
						animDelay = $(this.element).attr('data-anim-delay') || '0s';

					$(this.element).addClass('animated').css({
						'visibility'	 : 'visible',
						'animation-name' : anim,
						'animation-delay': animDelay
					});

				}, {
					offset: '90%',
					triggerOnce: true 
				});
			}
		},
		portfolio: function() {
			var container = $('.portfolio-container'),
				layoutMode = container.data('layout');

			if ( typeof imagesLoaded === 'function' ) {
				container.imagesLoaded(function () {
					container.isotope({
						itemSelector: '.portfolio-item',
						layoutMode: (layoutMode) ? layoutMode : 'masonry'
					});
				});
			}
		},
		portfolioFilter: function () {
			// Isotope plugin filter handle
			var filtersContainer = $('.portfolio-filter');

			filtersContainer.find('a').on('click', function(e) {
				var $this = $(this),
					selector = $this.attr('data-filter');

				filtersContainer.find('.active').removeClass('active');

				// And filter now
				$('.portfolio-container').isotope({
					filter: selector,
					transitionDuration: '0.5s'
				});
				
				$this.closest('li').addClass('active');
				e.preventDefault();
			});
		}
	};

	// Ready Event
	jQuery(document).ready(function () {
		// Init our app
		Kuper.init();
	});

	// Load Event
	$(window).on('load', function() {
		Kuper.scrollBtnAppear();
	});

	// Scroll Event
	$(window).on('scroll', function () {
		Kuper.scrollBtnAppear();
	});
	
})(jQuery);


