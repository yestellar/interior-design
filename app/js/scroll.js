$(function () {
  // full / burger menu switcher
  var navbar = $('.navbar_mobile')
  var button = $('.navbar_mobile__button')
  var active = false

  button.click(function() {
    active = !active
    if (active) navbar.addClass('active')
    else navbar.removeClass('active')
  })

  // hide / show menu on scroll
  var navbars = $('.navbar-scroll')
  var isNavbarVisible = true

  var prevPosition = $(document).scrollTop()

  $(window).scroll(function(e) {
    // if scroll down - hide
    currentPosition = $(document).scrollTop()
    if (prevPosition < currentPosition && currentPosition > 100) {
      if (isNavbarVisible) {
        navbars.each(function(index) {
          $(this).css("top", "-60px")
          $(this).css("opacity", "0")
        })
        isNavbarVisible = false
      }
    // if scroll up - show
  } else if (prevPosition > currentPosition){
      if (!isNavbarVisible) {
        navbars.each(function(index) {
          $(this).css("top", "0px")
          $(this).css("opacity", "1")
        })
      }
      isNavbarVisible = true
    }

    prevPosition = currentPosition
  })

  // top menu buttons
  var topMenuBottons = $('.navbar_link')
  topMenuBottons.click(function(event) {
    // prevent href attr
    event.preventDefault()

    var scrollDestination = "." + $(this).attr('destination')
    var margin = 0
    if($(this).attr('margin') != undefined) margin = parseInt($(this).attr('margin'))
    scrollTo(scrollDestination, margin)
  })

  // footer menu selector
  var footerMenuButton = $('.footer__menu-button')

  footerMenuButton.click(function () {
    var scrollDestination = "." + $('.footer__menu').val()
    scrollTo(scrollDestination, 60)
  })

  // header slider buttons scrolls to services Section
  var headerSilderButtons = $('.head-slider__text-button')
  headerSilderButtons.each(function() {
    $(this).click(function() {
      var scrollDestination = $('.services')
      scrollTo(scrollDestination, 60)
    })
  })

  function scrollTo(scrollDestination, margin) {
    // scrolling animation
    $([document.documentElement, document.body]).animate({
      scrollTop: $(scrollDestination).offset().top.toFixed() - margin
    }, 1000);
    navbar.removeClass('active')
  }
})
