$(function() {

  var currentSlide = 1
  var sliderSize = 3

  console.log($('.head-slider__photo'))

  $('#slider_left').click(function() {
    sliderHandler(-1)
  })
  $('#slider_right').click(function() {
    sliderHandler(1)
  })

  function sliderHandler(eventIndex) {
    var prevSlide = currentSlide
    currentSlide += eventIndex
    if (currentSlide > sliderSize) {
      currentSlide = 1
    }
    else if (currentSlide < 1) {
      currentSlide = 3
    }
    $('.head-slider__photo').each(function(index) {
      if (index+1 == currentSlide) {
        $(this).addClass('head-slider__photo_active')
      } else {
        $(this).removeClass('head-slider__photo_active')
      }
    })
    console.log(currentSlide);
  }

  // $('#slider_left').click(function() {
  //   $('.head-slider__photo').each(function(index) {
  //     $(this).addClass('head-slider__photo_active')
  //   })
  // })
  //
  // $('#slider_left').click(function() {
  //   console.log('click');
  // })
	// Custom JS

});
