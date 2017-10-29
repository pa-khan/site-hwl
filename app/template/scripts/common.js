$(document).ready(function($) {

	/* Phone mask */
	$('.input_phone').mask('+7 (999) 999-99-99');
	
	$('.slider__images').slick({
		fade: true,
		prevArrow: '<button type="button" class="slick-arrow slick-prev"><i class="icon icon-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-arrow slick-next"><i class="icon icon-arrow-right"></i></button>'
	});
	$('.portfolio__list').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		prevArrow: '<button type="button" class="slick-arrow slick-prev"><i class="icon icon-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-arrow slick-next"><i class="icon icon-arrow-right"></i></button>',
		responsive: [
			{
				breakpoint: 965,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	$('.reviews__list').slick({
		arrows: false,
		asNavFor: '.reviews__faces',
		fade: true
	});
	$('.reviews__faces').slick({
		slidesToShow: 3,
		centerMode: true,
		variableWidth: true,
		asNavFor: '.reviews__list',
		focusOnSelect: true,
		prevArrow: '<button type="button" class="slick-arrow slick-prev"><i class="icon icon-arrow-left-gray"></i></button>',
		nextArrow: '<button type="button" class="slick-arrow slick-next"><i class="icon icon-arrow-right-gray"></i></button>',
		fade: false,
		responsive: [
			{
				breakpoint: 965,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					variableWidth: false,
					centerMode: false,
					fade: true
				}
			}
		]
	});
	$('.shares__list').slick({
		fade: true,
		prevArrow: '<button type="button" class="slick-arrow slick-prev"><i class="icon icon-arrow-left-big"></i></button>',
		nextArrow: '<button type="button" class="slick-arrow slick-next"><i class="icon icon-arrow-right-big"></i></button>'
	})
	$('.faq__head').click(function(event) {
		var item = $(this).parents('.faq__item'),
			body = item.find('.faq__body');
		item.toggleClass('faq__item_active');
		body.slideToggle(300);
	});
	$(".header__nav a").click(function (event) {
		var id  = $(this).attr('href');
		if(id.charAt(0) == '#'){
			event.preventDefault();
			var top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);
		}
	});
	$('.mobile-btn').click(function(event) {
		$(this).toggleClass('mobile-btn_click');
		$('.header__nav').toggle(0);
	});


	$('.popup form').submit(function() {
		$.ajax({
			type: "POST",
			url: "/order.php",
			data: $(this).serialize()
		}).done(function() {
			parent.jQuery.fancybox.getInstance().close();
			$.fancybox.open({src  : '#popup-thanks',type : 'inline'});
			
		});
		return false;
	});
	$(window).on('load resize', function(event) {
		var windowWidth = $(window).width();
		if(windowWidth > 965){
			$('.mobile-btn').removeClass('mobile-btn_click');
			$('.header__nav').removeAttr('style');
		}
	});
});