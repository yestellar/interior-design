$(function() {
  // show / hide article
  var article = $('.about__article')
  var state = false

  $('.about__button').each(function() {
    $(this).click(function() {
      if (!state) showArticle()
      else hideArticle()
    })
  })

  function showArticle() {
    article.addClass('about__article_show')
    state = true
  }

  function hideArticle() {
    article.addClass('about__article_hide')
    setTimeout(function() {
      article.removeClass('about__article_hide')
      article.removeClass('about__article_show')
      state = false
    }, 500)
  }
})
