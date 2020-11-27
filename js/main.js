$(function(){
	new Swiper('.swiper-header', {
		pagination: {
		  el: '.swiper-header-pagination',
		  clickable: true,
		},
	});

	new Swiper('.swiper-videos', {
		slidesPerView: 3,
      	spaceBetween: 20,
		pagination: {
		  el: '.swiper-videos-pagination',
		  clickable: true,
		},
		navigation: {
			nextEl: '.swiper-videos-button-next',
			prevEl: '.swiper-videos-button-prev',
		},
	});

	new Swiper('.swiper-experience', {
		slidesPerView: 'auto',
		centeredSlides: true,
		loop: true,
		pagination: {
		  el: '.swiper-experience-pagination',
		  clickable: true,
		},
		navigation: {
			nextEl: '.swiper-experience-button-next',
			prevEl: '.swiper-experience-button-prev',
		},
	});

	new Swiper('.swiper-customer-images', {
		slidesPerView: 3,
      	spaceBetween: 20,
		pagination: {
		  el: '.swiper-customer-images-pagination',
		  clickable: true,
		},
		navigation: {
			nextEl: '.swiper-customer-images-button-next',
			prevEl: '.swiper-customer-images-button-prev',
		},
	});

	new Swiper('.swiper-news', {
		slidesPerView: 3,
      	spaceBetween: 20,
		pagination: {
		  el: '.swiper-news-pagination',
		  clickable: true,
		},
		navigation: {
			nextEl: '.swiper-news-button-next',
			prevEl: '.swiper-news-button-prev',
		},
	});

	$("#navbar-menu .nav-item").hover(function() {
		var isHovered = $(this).is(":hover");
		if (isHovered) {
			$(this).children(".navbar-menu-sub").stop().slideDown(300);
			$(this).children(".navbar-menu-sub__arrow").stop().fadeIn(0);
		} else {
			$(this).children(".navbar-menu-sub").stop().slideUp(300);
			$(this).children(".navbar-menu-sub__arrow").stop().fadeOut(500);
		}
	});
	  
})