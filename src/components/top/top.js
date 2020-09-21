import $ from 'jquery';

$('.left-menu__header').click(function () {
  $('.left-menu__toggle').toggleClass('left-menu__toggle_active');
  $($(this).attr('data-target')).toggleClass('is-open');
});

$('.menu__toggle').click(function () {
  $('.menu').toggleClass('is-open');
  $('.left-menu__toggle').toggleClass('left-menu__toggle_active');
});
