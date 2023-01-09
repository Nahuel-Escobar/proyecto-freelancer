var swiper = new Swiper('.swiper', {
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev'
	},
	slidesPerView: 1,
	spaceBetween: 10,
  
	breakpoints: {
	  620: {
		slidesPerView: 2,
		spaceBetween: 20,
	  },
	  680: {
		slidesPerView: 3,
		spaceBetween: 20,
	  },
	  920: {
		slidesPerView: 4,
		spaceBetween: 30,
	  },
	  1240: {
		slidesPerView: 5,
		spaceBetween: 40,
	  }
	} 
    });