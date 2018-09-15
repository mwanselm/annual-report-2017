jQuery.noConflict();
jQuery(document).ready(function ($) {
	// bind a click event to the 'skip' link
	//	$(".skip").click(function(event){
	//
	//		// strip the leading hash and declare
	//		// the content we're skipping to
	//		var skipTo="#"+this.href.split('#')[1];
	//
	//		// Setting 'tabindex' to -1 takes an element out of normal 
	//		// tab flow but allows it to be focused via javascript
	//		$(skipTo).attr('tabindex', -1).on('blur focusout', function () {
	//
	//			// when focus leaves this element, 
	//			// remove the tabindex attribute
	//			$(this).removeAttr('tabindex');
	//
	//		}).focus(); // focus on the content container
	//	});

	$(function () {
		var pathname = window.location.pathname;
		var getLast = pathname.match(/.*\/(.*)$/)[1];
		var truePath = getLast.replace(".html", "");

		if (truePath === '') {
			$('body').attr('id', 'index');
		} else {
			$('body').attr('id', truePath);
		}
	});




	// Hide Header on on scroll down
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('header').outerHeight();

	$(window).scroll(function (event) {
		didScroll = true;
	});

	setInterval(function () {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);

	function hasScrolled() {
		var st = $(this).scrollTop();

		// Make sure they scroll more than delta
		if (Math.abs(lastScrollTop - st) <= delta)
			return;

		// If they scrolled down and are past the navbar, add class .nav-up.
		// This is necessary so you never see what is "behind" the navbar.
		if (st > lastScrollTop && st > navbarHeight) {
			// Scroll Down
			$('body').removeClass('nav-down').addClass('nav-up');
		} else {
			// Scroll Up
			if (st + $(window).height() < $(document).height()) {
				$('body').removeClass('nav-up').addClass('nav-down');
			}
		}

		lastScrollTop = st;
	}
	// Social Share Mobile

	$('#mobile-share-button').on('click', function (event) {
		$('#mobile-share-links').toggleClass('hallo');
		$(this).attr('aria-expanded', function (i, attr) {
			return attr == 'true' ? 'false' : 'true'
		});

	});
	
	$('a.video-play').on('click', function (event) {
		$("button.w-vulcan-v2-button").focus();
	});

	//	Detect iOS

	var iOS = ['iPad', 'iPhone', 'iPod'].indexOf(navigator.platform) >= 0;
	if (iOS) {
		//Hide modal 
		$('body').addClass('safari').css({
			"overflow": "scroll",
			"-webkit-overflow-scrolling": "touch"
		});
	} else {
		//show modal or do nothing
	}

	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function () {
		($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if ($(this).scrollTop() > offset_opacity) {
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function (event) {
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0,
		}, scroll_top_duration);
		$("#0").focus();
	});
	
	$(document).on('lity:close', function(event, instance) {
		$('body').removeClass('ham-open');	
	});
	
	
	//	Hamburger Nav 
	$('#toggle').click(function () {
		$(this).toggleClass('open');
		$('.lity').addClass('hamburger-container');
		$('body').toggleClass('ham-open');

		$(this).attr('aria-expanded', function (i, attr) {
			return attr == 'true' ? 'false' : 'true'
		});

		
	});
	$('#hamburger-toggle').click(function () {

		$('body').addClass('ham-open');
		$('header , main , footer , .footer-carousel').attr('aria-hidden', function (i, attr) {
			return attr == 'true' ? 'false' : 'true'
		});
	});
	
	$('#hamburger-menu').on('hidden.bs.modal', function (e) {
	  // do something...
		$('body').removeClass('ham-open');
		$('header , main , footer , .footer-carousel').attr('aria-hidden', function (i, attr) {
			return attr == 'false' ? 'true' : 'false'
		});
	});
	
	
	
	

	/* PrognRoll | https://mburakerman.github.io/prognroll/ | @mburakerman | License: MIT */
	$(".progress-bar").prognroll({
		height: 5, //Progress bar height
		color: "#328ABD", //Progress bar background color
		custom: false //If you make it true, you can add your custom div and see it's scroll progress on the page
	 });
		
	
	
	
	//	Lity Modal
	// Bind as an event handler
	$(document).on('click', '[data-lightbox]', lity);


	//	Accordion
	var accPlus = $('.accordions .plus-minus');
	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function () {
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		});
		accPlus[i].addEventListener("click", function () {
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		});

	}
	
	//	Footer Carousel
	$(".btn-footer-carousel").click(function () {
		$('.footer-carousel').toggleClass("ftr-car-hide");
		$('.footer-carousel .carousel').toggleClass("sr-hide");

		$(this).attr('aria-expanded', function (i, attr) {
			return attr == 'true' ? 'false' : 'true'
		});
		$('body').toggleClass('footer-carousel-up');
		$('.footer-carousel .slick-slide').attr('aria-hidden', function (i, attr) {
			return attr == 'false' ? 'true' : 'false'
		});
		$('.footer-carousel .slick-current').attr('aria-hidden', function (i, attr) {
			return attr == 'true' ? 'false' : 'true'
		});
	});
	

	$('.footer-carousel .carousel').slick({
		//		slidesToShow: 6,
		slidesToScroll: 1,
		//centerPadding: '60px',
		infinite: true,
		centerMode: true,
		accessibility: false,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					//				slidesToShow: 4
				}
			},
			{
				breakpoint: 480,
				settings: {
					//				slidesToShow: 1
					arrows: false
				}
			}
		]
	});

	//	Home Carousel

	$('.home-carousel .carousel').slick({
		customPaging: function (slick, index) {
			var image_title = slick.$slides.eq(index).find('img').attr('title') || '';
			var image_url = slick.$slides.eq(index).find('img').attr('id') || '';
			var image_id = slick.$slides.eq(index).find('img').attr('name') || '';
			return '<a id="' + image_id + '" href="' + image_url + '"> ' + image_title + '</a>';

		},
		appendDots: $(".home-carousel .inner-wrapper .slick-navigation"),
		appendArrows: $(".home-carousel .inner-wrapper .slick-navigation"),
		arrows: false,
		fade: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 1200,
		dots: true,
		pauseOnHover: true,
		pauseOnFocus: true,
		pauseOnDotsHover: true,
		responsive: [
			{
				breakpoint: 900,
				settings: {
					arrows: true,
				}
						}
					]
	});

	$('.carousel-letter').slick({
		dots: true,
		arrows: true,
		fade: true,
		accessibility: false,
		customPaging: function (slider, i) {
			
			var slideNumber = (i + 1),
				totalSlides = slider.slideCount;
			return '<button role="button">' + 'Accolade slide ' + slideNumber + '/' + totalSlides + '</button>';
		}
	});
	$('.carousel-letter .slick-dots li button').attr('aria-pressed' , 'false');
	$('.carousel-letter .slick-dots li.slick-active button').attr('aria-pressed' , 'true');
	
	
	
	
	
	$('.carousel-letter').on('afterChange', function(event, slick, currentSlide, nextSlide){
		$('.carousel-letter .slick-dots li button').attr('aria-pressed' , 'false');
		$('.carousel-letter .slick-dots li.slick-active button').attr('aria-pressed' , 'true');
		
		
	});
	
	
	
	$('.footer-carousel .slider .slick-next').attr('aria-label' , 'Next Story Slide');
	
	$('.footer-carousel .slider .slick-prev').attr('aria-label' , 'Previous Story Slide');
	
	$('.carousel-letter .slick-next').attr('aria-label' , 'Next Accolade Slide');
	
	$('.carousel-letter .slick-prev').attr('aria-label' , 'Previous Accolade Slide');
	
	$(function () {
		var $looped = $('.tl_list li');
		var $loopedSection = $('.tl_section');

		var index = 0
		var interval = null
		
		

		function nextSlide() {
			if (interval == null) return;
			index += 1
			if (index >= $looped.length) index = 0
			$looped.removeClass('current').eq(index).addClass('current');
			$('.tl_list li a').attr('aria-selected', 'false').eq(index).attr('aria-selected', 'true');
			$loopedSection.attr('aria-hidden' , 'true').eq(index).attr('aria-hidden' , 'false');
			
		}



		function play() {
			pause()
			interval = setInterval(nextSlide, 2300);
		}

		function pause() {
			if (interval) clearInterval(interval);
			interval = null;
		}

		// auto-play
		play()

		// handle button clicks
		$('button.pause').click(function () {
			pause()
		});

		$('button.play').click(function () {
			play()
		});
		
		
		$('ul.tl_list li a').focus(function (){
			pause()
			$('.tl_container .btn-container').removeClass('pause').addClass('play');
		});


		

		$(".tl_list li").hover(function () {
			$(".tl_list li").removeClass("white");
			$(this).addClass("white").children('a');
		}, function () {
			$(".tl_list li").removeClass("white");
		});	



		$("ul.tl_list li a").focus(function () {
			$('ul.tl_list li a').not(this).attr('aria-selected', 'false');
			$(this).attr('aria-selected', 'true');
		});
		


		$(".btn-container button").click(function () {
			//		  alert( "Handler for .click() called." );
			$('.tabs-left .btn-container').toggleClass('pause play');

		});



	});
 
});



