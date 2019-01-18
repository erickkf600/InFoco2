$(document).ready(function() {

  //Scroll Menu

  $(window).on('scroll', function(){
  	if( $(window).scrollTop()>100 ){
      $('.header-top .header-fixed-wrapper').addClass('navbar-fixed-top animated fadeInDown');
    }else{
      $('.header-top .header-fixed-wrapper').removeClass('navbar-fixed-top animated fadeInDown');
    }

  });

  $(window).scroll(function(){
  	if ($(this).scrollTop() > 200) {
  		$('#menu').fadeIn(500);
  	} else {
  		$('#menu').fadeOut(500);
  	}

  });
  $('.menu, .overlay').click(function () {
    $('.menu').toggleClass('clicked');  
    $('#nav').toggleClass('show'); 
  });
  $('.pesq-icon').click(function(){
    $(".search-box").toggleClass("exibir");
    $("#navbar").toggleClass("sumir");
    $("#logo").toggleClass("up");
    $(".pesq-icon").toggleClass("close");
  });

});
var swiper = new Swiper('#carousel-partners', {
  effect: 'coverflow',
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
  autoplay: {
    delay: 5000,
  },
});

var swiper = new Swiper('#categ-slides', {
  loop: true,
  breakpoints: {
    1920: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    1360:{
      slidesPerView: 3,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 0,
    }
  },
  navigation: {
    nextEl: '.proximo',
    prevEl: '.voltar',
  },
});


var swiper = new Swiper('#vertical-slider', {
  loop: true,
  autoplay: {
    delay: 3000,
  },
});