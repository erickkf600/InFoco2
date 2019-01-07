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
$(document).ready(function(){
  var swiper = new Swiper('.swiper-container', {
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
});
