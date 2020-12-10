$(function(){
	// $("html, body").animate({ scrollTop: 0 }, "slow");
	
	new Swiper('.swiper-header', {
		pagination: {
			el: '.swiper-header-pagination',
			clickable: true,
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: true,
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
		autoplay: {
			delay: 5000,
			disableOnInteraction: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1.3,
				spaceBetween: 15,
			},
			480: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
		}
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
		autoplay: {
			delay: 5000,
			disableOnInteraction: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 5,
			},
			480: {
				slidesPerView: 1,
				spaceBetween: 5,
			},
			992: {
				slidesPerView: 'auto',
			},
		}
	});

	var configSwiperCustomerImages = function (index) {
		return {
			slidesPerView: 3,
			  spaceBetween: 20,
			pagination: {
			  el: '.swiper-customer-images-pagination-'+ index,
			  clickable: true,
			},
			navigation: {
				nextEl: '.swiper-customer-images-button-next-'+ index,
				prevEl: '.swiper-customer-images-button-prev-'+ index,
			},
			autoplay: {
				delay: 5000,
				disableOnInteraction: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 5,
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: '3',
				},
			}
		}
	}

	let swiperCustomerImages1 = new Swiper('.swiper-customer-images-1', configSwiperCustomerImages(1));
	let swiperCustomerImages2 = new Swiper('.swiper-customer-images-2', configSwiperCustomerImages(2));
	let swiperCustomerImages3 = new Swiper('.swiper-customer-images-3', configSwiperCustomerImages(3));
	let swiperCustomerImages4 = new Swiper('.swiper-customer-images-4', configSwiperCustomerImages(4));

	$('.customer-images a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        e.target // newly activated tab
		e.relatedTarget // previous active tab
		let index = $(this).attr('data-swiper-index');
		if(index){
			switch(index){
				case '1':
					swiperCustomerImages1.update()
					break;
				case '2':
					swiperCustomerImages2.update()
					break;
				case '3':
					swiperCustomerImages3.update()
					break;
				case '4':
					swiperCustomerImages4.update()
					break;
				default:
					swiperCustomerImages1.update()
			}
		}
		
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
		autoplay: {
			delay: 5000,
			disableOnInteraction: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1.3,
				spaceBetween: 15,
			},
			480: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
		}
	});

	new Swiper('.swiper-promotions', {
		slidesPerView: 3,
		spaceBetween: 20,
		slidesPerGroup: 3,
		pagination: {
			el: '.swiper-promotions-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + ' swiper-promotions-pagination-number">' + (index + 1) + '</span>';
			},
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1.3,
				spaceBetween: 15,
				slidesPerGroup: 1,
				pagination: {
					el: '.swiper-promotions-pagination',
					clickable: true,
					renderBullet: function (index, className) {
						return '<span class="' + className + '"></span>';
					},
				},
			},
			480: {
				slidesPerView: 2,
				spaceBetween: 15,
				slidesPerGroup: 2,
			},
			768: {
				slidesPerView: 2,
				slidesPerGroup: 2,
			},
			992: {
				slidesPerView: 3,
				slidesPerGroup: 3,
			},
		}
	});

	// function callSwiperBestService(){
	// 	new Swiper('.swiper-best-service', {
	// 		slidesPerView: 1,
	// 		centeredSlides: true,
	// 		loop: true,
	// 		pagination: {
	// 		  el: '.swiper-best-service-pagination',
	// 		  clickable: true,
	// 		},
	// 		autoplay: {
	// 			delay: 5000,
	// 			disableOnInteraction: true,
	// 		},
	// 		breakpoints: {
	// 			0: {
	// 				slidesPerView: 1,
	// 				spaceBetween: 5,
	// 			}
	// 		}
	// 	});
	// }

	function menuDesktop(){
		$("#navbar-menu .nav-item").hover(function() {
			var isHovered = $(this).is(":hover");
			if (isHovered) {
				$(this).addClass('active');
				$(this).children(".navbar-menu-sub").stop().slideDown(300);
				$(this).children(".navbar-menu-sub__arrow").stop().fadeIn(0);
			} else {
				$(this).removeClass('active');
				$(this).children(".navbar-menu-sub").stop().slideUp(300);
				$(this).children(".navbar-menu-sub__arrow").stop().fadeOut(500);
			}
		});
	}
	function menuMobile(){
		$("#navbar-menu .nav-item").on('click',function() {
			if($(this).hasClass("active")){
				$(this).removeClass("active")
				return;
			}
			$("#navbar-menu .nav-item").removeClass('active')
			$(this).addClass('active');
		});
		// callSwiperBestService()
	}

	function checkScreen(){
		windowsize = $(window).width();
		if (windowsize > 992) {
			$("#navbar-menu .nav-item").off()
			menuDesktop()
		}else{
			$("#navbar-menu .nav-item").off()
			menuMobile()
		}
	}

	checkScreen()
	
	$(window).on('resize', function() {
		checkScreen()
	});

	$('.navbar-mobile-header__close').on('click', function() {
		$('#navbarSupportedContent').toggleClass('show')
	})

	new WOW().init();
})