
var slider = new Slider('.bikes__slider', {
  slidesPerViw: 3,
  spaseBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.bikes__slider-button-next',
    prevEl: '.bikes__slider-button-prev',
  },
});
