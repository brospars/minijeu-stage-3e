(function ($) {
  // Fonction qui initialize le jeu
  let initGame = function(options) {
    // Déclaration et initialisation du score à zéro
    //...
    // Déclaration et initialisation du temps imparti (30s)
    //...
    // Déclaration et initialisation de la taille du tableau (le nombre de points : 100)
    //...

    // Déclaration du statut du jeu 'stopped' au depart puis 'playing'
    let status = 'stopped'

    // Déclaration et initialisation des elements d'intéraction HTML (score, timer, reset, start)
    // par convention nous prefixerons le noms des variables contenant des elements HTML par $, ex : $score
    let $score = $('#score').val(score)
    let $timer = $('#timer').val(time)
    let $reset = $('#reset')
    let $start = $('#start')

    // Déclaration de la variable contenant tous les points pour avoir une référence globale
    let $dots

    // Déclaration de la variable qui contiendra le timer du jeu
    let timer

    // Fonction qui crée un tableau de points
    let initDots = function() {
      // On crée un tableau de taille x partir de la variable size définie plus haut
      //...

      // on récupère tous les points et on les stock dans la variables $dots
      $dots = $('.dot')
    }

    // Fonction qui initialize les événements
    // on utilise ici la fonction click, ex : $start.click(function(){ ... })
    let initEvents = function () {
      // Lors du click sur le bouton start
      //...

      // Lors du click sur le bouton reset
      //...

      // Pour tous les points du jeu
      $dots.each(function() {
        // Lors du click sur un point on appelle la fonction qui se chargera d'executer des actions
        $(this).click(function(){
          //...
        })
      })
    }

    // Fonction qui démarre le jeu
    let startGame = function () {
      // On reset le jeu
      //...

      // On change le statut du jeu
      status = 'playing'
      // On selectionne un point à cliquer et on démarre le timer
      //...

      // On démarre le timer
      //...
    }

    // Fonction qui initialise le timer du jeu
    let initTimer = function () {
      // Interval qui se déclenche chaque seconde
      timer = setInterval(function(){
        // on fait décroitre le compteur du timer
        //...

        // on met à jour l'affichage du timer
        $timer.val(time)

        // Lorsque celui arrive à zéro la partie est fini
        if (time == 0) {
          // on affiche le score avec alert(...)
          //...
          // on reset le jeu
          //...
        }
      }, 1000)
    }

    // Fonction qui selectionne aléatoirement le point à cliquer
    let selectDot = function () {
      $dots.removeClass('selected')

      let random = Math.floor(Math.random() * ($dots.length))
      $($dots[random]).addClass('selected')
    }

    // Fonction qui met à jour le score lorsque l'on clique sur un point
    let clickDot = function (dot) {
      // Si la partie n'a pas commencé on ne fait rien
      if (status != 'playing') { return }

      // Si le point cliqué est bon alors on augmente le score et on selectionne un nouveau
      if (dot.hasClass('selected')) {
        //...
        //...
        // Sinon on diminue le score
      } else {
        //...
      }
    }

    // Fonction pour mettre à jour le score
    let updateScore = function (value) {
      score = score + value
      $score.val(score)
    }

    // Fonction de remise à zéro du jeu
    let resetGame = function () {
      clearInterval(timer)
      timer = null
      status = 'stopped'
      score = 0
      time = 30
      size = 100
      $timer.val(time)
      $score.val(score)
      $('.dot.selected').removeClass('selected')
    }

    // On initialize les points et les événements
    initDots();
    initEvents();
  }

  // Déclaration d'un nouveau jeu
  initGame()

})(jQuery);
