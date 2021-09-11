$(function() {

  //Smooth scroll
  $(".menu a, .logo").on("click", function (e) {
		e.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

  //slider
  $('.slider-blog__inner').slick({
    dots: true,
    arrows: false,
  });

  //burger menu
  $('.menu__btn,  .menu a').on('click', function() {
    $('.header__top').toggleClass('header__top--active');
  });

  //gallery mixer
  var mixer = mixitup('.gallery__content');
});