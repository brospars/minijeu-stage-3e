(function ($) {
  // Fonction qui initialize le jeu
  let initGame = function(options) {
    let score = 0
    let time = options.time
    let size = options.size

    let $dotsContainer = $('#dots')
    let $score = $('#score').val(score)
    let $timer = $('#timer').val(time)

    let $reset = $('#reset')
    let $start = $('#start')

    let status = 'stopped'

    let $dots = null

    let timer = null

    let initDots = function() {

      for (let i=0; i<size ; i++){
        for (let j=0; j<size ; j++){
          $dotsContainer.append($('<div class="dot"></div>'))
        }
      }

      $dots = $('.dot')
    }

    let initEvents = function () {
      $start.click(function(){
        startGame()
      })
      $reset.click(function(){
        resetGame()
      })

      $dots.each(function() {
        $(this).click(function(){
          clickDot($(this))
        })
      })
    }

    let initTimer = function () {
      timer = setInterval(function(){
        time--
        $timer.val(time)

        if (time == 0) {
          alert('The end ! Your score : '+score)
          resetGame()
        }
      }, 1000)
    }

    let startGame = function () {
      status = 'playing'
      selectDot()
      initTimer()
    }

    let resetGame = function () {
      clearInterval(timer)
      timer = null
      status = 'stopped'
      score = 0
      time = options.time
      size = options.size
      $timer.val(time)
      $score.val(score)
      $('.dot.selected').removeClass('selected')
    }

    let selectDot = function () {
      $dots.removeClass('selected')

      let random = Math.floor(Math.random() * ($dots.length))
      $($dots[random]).addClass('selected')
    }

    let clickDot = function (dot) {
      if (status != 'playing') { return }

      if (dot.hasClass('selected')) {
        updateScore(1)
        selectDot()
      } else {
        updateScore(-1)
      }
    }

    let updateScore = function (value) {
      score = score + value
      $score.val(score)
    }

    initDots();
    initEvents();
  }

  // Déclaration d'un nouveau jeu
  initGame({size: 10, time: 30})

})(jQuery);
