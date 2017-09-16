// 
//  game.js for Hangman-Style-Game
//  BootCamp at UNC Homework Assignment 3
//  September 16, 2017
//  Bo Slott
//
//  -------------------------------------------



document.onload = gameOn ();    // A different game-initiation-event will be added

//
//    Begin a new game with the property values of the parameter
//
//    ** - Need To Add Parameter - **
//
function gameOn () {

  // 
  //    Begin Game Play
  //
  var game = new Hangman ();

//
//    Sets a default theme to begin game play
//
  game.currentTheme.setNewTheme(slottFamily);

  document.getElementById("reset-btn").onclick = function (event) {
      game.resetGame();
    }

  //
  //    Allow a theme selction
  //
  document.getElementById("pokemonTheme").onclick = function(event) {
    game.currentTheme.setNewTheme(pokemonTheme);
    game.newGame();
    game.renderGameBoard();
  }

  document.getElementById("slottFamilyTheme").onclick = function(event) {
    game.currentTheme.setNewTheme(slottFamily);
    game.newGame();
    game.renderGameBoard(); 
  }


  // Set a new gamePlay character
    game.resetGamePlayCharacter();

  // Render a new gamePlay board
    game.renderGameBoard ();

  //  User chooses a letter and it is compared to the correct answer
    document.onkeyup = function(event) {
      game.userGuess = event.key;
      game.userGuess = game.userGuess.toUpperCase();
      
      game.guessComparison();
    }
}

 















