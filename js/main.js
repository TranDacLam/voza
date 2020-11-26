$(function(){
	new Swiper('.swiper-header', {
		pagination: {
		  el: '.swiper-pagination',
		  dynamicBullets: true,
		},
	});


	$("#navbar-menu .nav-item").hover(function() {
		var isHovered = $(this).is(":hover");
		if (isHovered) {
		  	$(this).children(".nav-menu-sub").stop().slideDown(300);
		} else {
		  	$(this).children(".nav-menu-sub").stop().slideUp(300);
		}
	});
	  
})