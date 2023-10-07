(function($) {
	
	"use strict";
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			var sticky_header = $('.main-header .sticky-header');
			if (windowpos > 700) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else{
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
		}
	}
	headerStyle();

	//Sticky Header Hide/Show On Scroll
	(function($) {
		var iScrollPos = 0;
		var sticky_header = $('.main-header .sticky-header');
		$(window).scroll(function () {
		    var iCurScrollPos = $(this).scrollTop();
		    if (iCurScrollPos > iScrollPos) {
		        $('.main-header .sticky-header').css({"position": "fixed", "width": "100%", "top": "-120px"});
		    } else {
		        $('.main-header .sticky-header').css({"top": "0"});
		    }
		    iScrollPos = iCurScrollPos;
		});
	})(jQuery);

	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-plus"></span></div>');
	}

	//Mobile Nav Hide Show
	if($('.mobile-menu').length){
		
		var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
		var mobileHeaderContent = $('.main-header .nav-outer .outer-box').html();
		var stickyMenuContent = $('.main-header .nav-outer .main-menu').html();
		$('.mobile-menu').append('<div class="close-btn"><span class="icon fa fa-times"></span></div>');
		$('.mobile-header .nav-outer').append('<div class="mobile-nav-toggler"><span class="icon fa fa-bars"></span></div>');
		$('.mobile-menu .menu-box').append(mobileMenuContent);
		$('.mobile-header .nav-outer').append(mobileHeaderContent);
		$('.sticky-header .main-menu').append(stickyMenuContent);
		$('.sticky-header .main-menu .navbar-collapse').addClass('show');
		$('.mobile-menu .menu-box .navbar-collapse').addClass('show');
		$('.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});

		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
			$(this).toggleClass('active');
		});
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
	}

	//Header Search
	if($('.search-btn').length) {
		$('.search-btn').on('click', function() {
			$('.main-header').addClass('search-active');
		});
		$('.close-search, .search-back-drop').on('click', function() {
			$('.main-header').removeClass('search-active');
		});
	}


	//Services Carousel
	if ($('.services-carousel').length) {
		$('.services-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			smartSpeed: 700,
			autoplay: false,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				768:{
					items:2
				},
				1024:{
					items:3
				},
				1280:{
					items:4
				}
			}
		});    		
	}

	//Recipes Carousel
	if ($('.recipes-carousel').length) {
		$('.recipes-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			smartSpeed: 400,
			autoplay: false,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				768:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});    		
	}

	//Testimonial Carousel
	if ($('.testimonial-carousel').length) {
		$('.testimonial-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 700,
			autoplay: true,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1024:{
					items:1
				},
			}
		});    		
	}

	//Testimonial Carousel
	if ($('.testimonial-carousel-two').length) {
		$('.testimonial-carousel-two').owlCarousel({
			loop:false,
			margin:30,
			nav:true,
			smartSpeed: 700,
			autoplay: true,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				768:{
					items:2
				},
				1024:{
					items:3
				},
			}
		});    		
	}

	//Portfolio Carousel
	if ($('.portfolio-carousel').length) {
		$('.portfolio-carousel').owlCarousel({
			loop:false,
			margin:0,
			nav:false,
			smartSpeed: 400,
			autoplay: false,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				768:{
					items:2
				},
				1024:{
					items:3
				}
			}
		});    		
	}

	//Team Carousel
	if ($('.team-carousel').length) {
		$('.team-carousel').owlCarousel({
			loop:false,
			margin:0,
			nav:false,
			smartSpeed: 700,
			autoplay: false,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				768:{
					items:2
				},
				1024:{
					items:3
				},
				1280:{
					items:4
				}
			}
		});    		
	}

	//Single Item Carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 700,
			autoplay: false,
			navText: [ '<span class="fa fa-arrow-left"></span>', '<span class="fa fa-arrow-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});    		
	}

	//Four Item Carousel
	if ($('.four-items-carousel').length) {
		$('.four-items-carousel').owlCarousel({
			loop:false,
			margin:0,
			nav:false,
			smartSpeed: 700,
			autoplay: false,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				768:{
					items:2
				},
				1024:{
					items:3
				},
				1280:{
					items:4
				}
			}
		});    		
	}

	//Make Content Sticky
	if ($('.sticky-sidebar').length) {
	    $('.sidebar-side').theiaStickySidebar({
	      // Settings
	      additionalMarginTop: 60
	    });
	}

	// Custom Select Box
	if ($('.sortby-select').length) {
    	$('.sortby-select').select2();
	}

	// cooked single ingredient
	if ($('.cooked-single-ingredient').length) {
    	$('.cooked-single-ingredient .cooked-ingredient-checkbox').on('click', function() {
			$(this).parent('.cooked-single-ingredient').toggleClass('checked');
		});
	}

	// Open modal in AJAX callback
	$('#call-btn').on('click', function(event) {
	  event.preventDefault();
	  this.blur();
	  $.get(this.href, function(html) {
	    $(html).appendTo('body').modal({
			clickClose: false,
			closeClass: 'cooked-close-fsm',
			closeExisting: true,
			fadeDuration: 300,
			fadeDelay: 0.15
	    });
	  });
	});

	//Jquery Knob animation  // Pie Chart Animation
	if($('.dial').length){
		$('.dial').appear(function(){
          var elm = $(this);
          var color = elm.attr('data-fgColor');  
          var perc = elm.attr('value');  
 
          elm.knob({ 
               'value': 0, 
                'min':0,
                'max':100,
                'skin':'tron',
                'readOnly':true,
                'thickness':0.06,
				'dynamicDraw': true,
				'displayInput':false
          });

          $({value: 0}).animate({ value: perc }, {
			  duration: 2000,
              easing: 'swing',
              progress: function () { elm.val(Math.ceil(this.value)).trigger('change');
              }
          });

          //circular progress bar color
          $(this).append(function() {
             // elm.parent().parent().find('.circular-bar-content').css('color',color);
              //elm.parent().parent().find('.circular-bar-content .txt').text(perc);
          });

          },{accY: 20});
    }

	// background Video
	if ($('.video-section').length) {
		function ytb_bg() {
			$(function(){
			  $('[data-youtube]').youtube_background({});
			});
		}
		ytb_bg();
	}

	//Default Masonary
	function defaultMasonry() {
		if($('.masonry-items-container').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.masonry-items-container');
	
			$container.isotope({
				itemSelector: '.masonry-item',
				 masonry: {
					columnWidth : '.masonry-item'
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
	
			winDow.on('resize', function(){

				$container.isotope({ 
					itemSelector: '.masonry-item',
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
		}
	}

	defaultMasonry();

	//MixItup Gallery
	if($('.filter-list').length){
	 	 $('.filter-list').mixItUp();
	 }

	//Message Box
	if($('.message-box').length){
		$('.message-box .close-btn').on('click', function(e) {
			$(this).parent('.message-box').fadeOut();
		});
	}

	//Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {
			
			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');
			
			if($(this).hasClass('active')!==true){
				$(outerBox).find('.accordion .acc-btn').removeClass('active ');
			}
			
			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);	
			}
		});	
	}

	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}

	//Progress Bar
	if($('.progress-line').length){
		$('.progress-line').appear(function(){
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width',percent+'%');
		},{accY: 0});
	}

	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
				$(target).fadeIn(300);
				$(target).addClass('active-tab animated fadeIn');
			}
		});
	}

	//Price Range Slider
	if($('.price-range-slider').length){
		$( ".price-range-slider" ).slider({
			range: true,
			min: 0,
			max: 90,
			values: [ 0, 84 ],
			slide: function( event, ui ) {
			$( "input.property-amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
			}
		});
		
		$( "input.property-amount" ).val( $( ".price-range-slider" ).slider( "values", 0 ) + " - $" + $( ".price-range-slider" ).slider( "values", 1 ) );	
	}

	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}
	
	//Contact Form Validation
	if($('#email-form').length){
		$('#submit').click(function(){
			
            var o = new Object();
            var form = '#email-form';
			
			var username = $('#email-form .username').val();
			var email = $('#email-form .email').val();
			
			if(username == '' || email == '')
			{
				$('#email-form .response').html('<div class="failed">Please fill the required fields.</div>');
				return false;
			}
            
            $.ajax({
                url:"sendemail.php",
                method:"POST",
                data: $(form).serialize(),
                beforeSend:function(){
                    $('#email-form .response').html('<div class="text-info"><img src="images/icons/preloader.gif"> Loading...</div>');
                },
                success:function(data){
                    $('form').trigger("reset");
                    $('#email-form .response').fadeIn().html(data);
                    setTimeout(function(){
                        $('#email-form .response').fadeOut("slow");
                    }, 5000);
                },
                error:function(){
                    $('#email-form .response').fadeIn().html(data);
                }
            });
        });
	}

	//Subscribe Form
	if($('#subscribe-form').length){
		$('#subscribe-newslatters').click(function(){
			
            var o = new Object();
            var form = '#subscribe-form';
			var email = $('#subscribe-form .email').val();
			
			if(email == '')
			{
				$('#subscribe-form .response').html('<div class="failed">Please enter your Email Address.</div>');
				return false;
			}
            
            $.ajax({
                url:"sendnewslatters.php",
                method:"POST",
                data: $(form).serialize(),
                beforeSend:function(){
                    $('#subscribe-form .response').html('<div class="text-info"><img src="images/icons/preloader.gif"> Loading...</div>');
                },
                success:function(data){
                    $('form').trigger("reset");
                    $('#subscribe-form .response').fadeIn().html(data);
                    setTimeout(function(){
                        $('#subscribe-form .response').fadeOut("slow");
                    }, 5000);
                },
                error:function(){
                    $('#subscribe-form .response').fadeIn().html(data);
                }
            });
        });
	}

	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}


/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
		defaultMasonry();
	});	

})(window.jQuery);