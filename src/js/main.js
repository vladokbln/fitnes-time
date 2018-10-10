// подключаем библиотеки из bower

//= ../bower_components/jquery/dist/jquery.js
//= ../bower_components/slick-carousel/slick/slick.js

$(function () {
	$(window).scroll(function(){
		var elem = $('.header-top'),
				top = $(this).scrollTop();
		if (top >= 100) {
			elem.css({
				'position': 'fixed',
			});
			elem.removeClass('pulse');
			elem.addClass('fadeIn')
		} 
		else {
			elem.css({
				'position': 'inherit',
		});	
			elem.removeClass('fadeIn');
			elem.addClass('pulse')
		}
  });

  $('.header-toggle').click(function(){
  	$('.header-nav').toggleClass('active')
	});
	$('.ourteam-item').click(function(){
  	$(this).toggleClass('active flipInX');
  	setTimeout(function(){
  		$('.ourteam-item').removeClass('flipInX');
  	}, 1000);
	});


	$('.banner-js').slick({
		dots: false,
		prevArrow: '.banner-btn__prev',
		nextArrow: '.banner-btn__next',
		responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	      	autoplay: true,
	      	arrows: false
	      }
	    }
	  ] 
	});
	$('.partners-js').slick({
		dots: false,
		slidesToShow: 5,
		prevArrow: '.partners-btn__prev',
		nextArrow: '.partners-btn__next',
		responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	      }
	    },
	  ]
	 }); 
	$('.footer-bottom__link').click(function(){
		$('html, body').animate({
			scrollTop:0
		}, 1000);
	});
  $(".header-nav__list").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 100}, 1000);
  });
});

