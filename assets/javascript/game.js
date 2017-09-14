// 
//  game.js for Hangman-Style-Game
//  BootCamp at UNC Homework Assignment 3
//  September 16, 2017
//  Bo Slott
//
//  -------------------------------------------




// console.log(game.currentTheme.name);


document.getElementById("pokemonTheme").onclick = function(event) {
  game.currentTheme = pokemonTheme;
};

document.getElementById("slottFamilyTheme").onclick = function(event) {
  game.setCurrentTheme(slottFamily);
}
console.log(slottFamily.charsList[3]);
console.log(game.currentTheme.name);

//
//    Begin Game Play
//

// Create a new game
  var game = new Hangman ();

// Set the current theme
  // game.setCurrentTheme (slottFamily);

// Set a new gamePlay character
  game.setGamePlayCharacter();

  game.lettersUsed = ["S", "B", "T", "A"];

// Render a new gamePlay board
  game.renderGameBoard ();


console.log(game.currentTheme.name);



















