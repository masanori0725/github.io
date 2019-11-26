var mySwiper = new Swiper('.swiper-container', {
  spaceBetween: 0,
  slidesPerView: 3,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
  ,breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 0
    }
  }
});

// FAQのアコーディオン
$('.faq-list-item').click(function () {
  var $answer = $(this).find('.answer');
  if ($answer.hasClass('open')) {
    $answer.removeClass('open');
    $answer.hide();
    $(this).find('span').text('+');
  } else {
    $answer.addClass('open');
    $answer.show();
    $(this).find('span').text('-')
  }
});

$('.menu-trigger').on('click', function () {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $('main').removeClass('open');
    $('nav').removeClass('open');
    $('.overlay').removeClass('open');
  } else {
    $(this).addClass('active');
    $('main').addClass('open');
    $('nav').addClass('open');
    $('.overlay').addClass('open');
  }
});
$('.overlay').on('click', function () {
  if ($(this).hasClass('open')) {
    $(this).removeClass('open');
    $('.menu-trigger').removeClass('active');
    $('main').removeClass('open');
    $('nav').removeClass('open');
  }
});
