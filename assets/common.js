$(function() {

  $('.arrow-left').click(function() {
    changeSlide(-1)
    clearInterval(changeSlideAuto)
  })
  $('.arrow-right').click(function() {
    changeSlide(1)
    clearInterval(changeSlideAuto)
  })

  var mainSlides = $('.head-slider__photo'),
      schemeSlides = $('.head-slider__scheme')
  var prevSlide

  function changeSlide(moveSide) {

    var nextSlideIndex

    if (prevSlide) prevSlide.removeClass('head-slider__photo_hide')

    // actions to hide active slide
    mainSlides.each(function(index) {
      if ($(this).hasClass('head-slider__photo_active')) {
        $(this).removeClass('head-slider__photo_active')

        $(this).addClass('head-slider__photo_hide')

        nextSlideIndex = setNextSlideIndex(index)
        prevSlide = $(this)
      }
    })

    // actions to show next slide
    mainSlides.each(function(index) {
      if (index == nextSlideIndex) {
        $(this).addClass('head-slider__photo_active')
      }
    })

    function setNextSlideIndex(currentSlideIndex) {
      var nextSlideIndex = currentSlideIndex + moveSide
      if (nextSlideIndex > mainSlides.length - 1) nextSlideIndex = 0
      else if (nextSlideIndex < 0) nextSlideIndex = 2
      return nextSlideIndex
    }

  }

  var changeSlideAuto = setInterval(function() {
    changeSlide(1)
  }, 3000)
})
