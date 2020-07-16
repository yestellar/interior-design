$(function() {

  var autoChange

  function brandsSliding() {
    $('.brands__container').addClass('brands__container_push')

    setTimeout(function() {
      $('.brands__block').first().appendTo($('.brands__container'))
      $('.brands__container').removeClass('brands__container_push')
    }, 1000)
  }

  autoChange = setInterval(brandsSliding, 2000)

})
