$(function() {
  // start

var slidesAmount = 3
var nextSlideIndex = 0

var slides = {
  photos: $('.head-slider__photo'),
  schemes: $('.head-slider__scheme'),
  texts: $('.head-slider__text'),
  points: $('.head-slider__point')
}

function moveSlideIndex(moveSide) {
  nextSlideIndex += moveSide
  if (nextSlideIndex > slidesAmount - 1) nextSlideIndex = 0
  else if (nextSlideIndex < 0) nextSlideIndex = 2
}

function changeSlideByIndex(nextSlideIndex) {
  changeSectionState(slides.photos, 'photo', nextSlideIndex)
  changeSectionState(slides.schemes, 'scheme', nextSlideIndex)
  changeSectionState(slides.texts, 'text', nextSlideIndex)
  changeSectionState(slides.points, 'point', nextSlideIndex)
}

function changeSectionState(objList, objListName, nextSlideIndex) {
  // actions to hide active slide
  objList.each(function(index) {
    if ($(this).hasClass('head-slider__' + objListName + '_active')) {

      $(this).removeClass('head-slider__' + objListName + '_active')
      $(this).addClass('head-slider__' + objListName + '_hide')

      var self = $(this)
      setTimeout(function() {
        self.removeClass('head-slider__' + objListName + '_hide')
      }, 1000)
    }
  })
  // actions to show next slide
  objList.each(function(index) {
    if (index == nextSlideIndex) {
      $(this).addClass('head-slider__' + objListName + '_active')
    }
  })
}

var changeSlideAuto = setInterval(function() {
  moveSlideIndex(1)
  changeSlideByIndex(nextSlideIndex)
}, 4000)

// arrows handling
$('.arrow-left').click(function() {
  moveSlideIndex(-1)
  changeSlideByIndex(nextSlideIndex)
  clearInterval(changeSlideAuto)
})
$('.arrow-right').click(function() {
  moveSlideIndex(1)
  changeSlideByIndex(nextSlideIndex)
  clearInterval(changeSlideAuto)
})
// points handling
slides.points.each(function(index) {
  var self = $(this)

  $(this).click(function() {
    self.addClass()
    nextSlideIndex = index
    changeSlideByIndex(nextSlideIndex)
    clearInterval(changeSlideAuto)
  })
})

// end
})
