//    Object Constructor Functions
//    Hangman-Style-Game
//    September 16, 2017
//    Bo Slott

//
//    Character Object Constructor
//
function Character(name, imgSRC) {
  this.name = name;
  this.imgSRC = imgSRC;
}

//
//    Theme Object Constructor
//
function Theme() {
  this.name = "";
  this.charsList = [];   // to become an array of Character objects
  
  //
  //    setThemeName is a future function that will be used to get data from a theme file
  //    containing the theme name on the first line
  //    1 parameter: the filepath to the theme file
  //
  this.setThemeName = function (theme) {
    this.name = theme.name;
  };

  //
  //    setThemeChars is a future function that will be ussed to get data from a theme file
  //    containing a list of character properties and values:
  //    name, image-src
  //    1 parameter: the filepath to the theme file
  //
  this.setThemeChars = function (theme) {
    this.charsList = theme.charsList;;
  };

  //

  //  setNewTheme will be used to render new values for all the theme properties
  //
  this.setNewTheme = function (theme) {
    this.setThemeName(theme);
    this.setThemeChars(theme);
  };

  this.setThemeTitle = function() {
    var themeTitle = this.name + " | Hangman-Style-Game";
    document.getElementById("theme-title").textContent = themeTitle;
  };
}

//
//    Hangman Object Constructor
//
function Hangman() {
  this.currentTheme = {};
  this.gamePlayCharacter = {};
  this.userGuess = {letter: "", isValid: false};
  this.lettersUsed = [];
  this.wrongGuessesRemain = 5;
  this.totGames = 0;
  this.totWins = 0;
  this.setCurrentTheme = function (theme) {
    this.currentTheme.name = theme.name;
    this.currentTheme.charsList = theme.charsList;
    this.currentTheme.setThemeTitle();
      
  };
  this.setGamePlayCharacter = function () {
    this.gamePlayCharacter = this.currentTheme.charsList[Math.floor(Math.random()*this.currentTheme.charsList.length)+1];
  };
  this.renderGameBoard = function () {
    document.getElementById("wrong-guesses-remain").textContent = this.wrongGuessesRemain;
    document.getElementById("letters-used").textContent = this.lettersUsed;
    document.getElementById("tot-games").textContent = this.totGames;
    document.getElementById("tot-wins").textContent = this.totWins;
  };
  this.renderNameDisplay = function () {
    var nameArray = this.gamePlayCharacter.name
  };
}





