
(function (){
  var doc = document;
  var index = 1;

  var Slider = function () {
    this.box = doc.querySelector('.bike-slide');
    this.slidesBox = doc.querySelector('.bikes__carousel');
    this.slides = doc.querySelectorAll('.bike-slide');
    this.btns = doc.querySelectorAll('.btn');
    this.size = this.box.clientWidth + 45;

    this.carousel();
  };

  Slider.prototype.carousel = function () {
    var i;
    var max = this.btns.length;
    var that = this;

    for (i = 0; i < max; i += 1){
      that.btns[i].addEventListener('click', Slider[that.btns[i].id].bind(null, that));
    }
  };

  Slider.prev = function (box) {
    //box.slidesBox.style.transform = "transform .3s ease-in-out";
    var max = box.slides.length;
    var size = box.size;
    index <= 0 ? false : index--;
    box.slidesBox.style.transform = 'translateX('+ (-index * size)+'px)';
  };

  Slider.next = function (box) {
    //box.slidesBox.style.transform = "transform .3s ease-in-out";
    var max = box.slides.length;
    var size = box.size;
    index >= max-1 ? false : index++;
    box.slidesBox.style.transform = 'translateX('+ (-index * size)+'px)';
  };

  new Slider();
})();

