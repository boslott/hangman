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
  this.nameLetters = this.name.split("");
  this.upNameLetters = function () {
    var upArr = [];
    for (var i=0; i<this.nameLetters.length; i++) {
      upArr[i] = this.nameLetters[i].toUpperCase();
    }
    return upArr;
  };
  this.upNameLtrsArr = this.upNameLetters ();
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
    this.charsList = theme.charsList;
  };

  //

  //  setNewTheme will be used to render new values for all the theme properties
  //
  this.setNewTheme = function (theme) {
    this.setThemeName(theme);
    this.setThemeChars(theme);
    this.setThemeTitle(theme);
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
  this.currentTheme = new Theme;
  this.gamePlayCharacter = {};
  this.userGuess = "";
  this.wrongLetters = [];
  this.rightLetters = [];
  this.wrongGuessesRemain = 5;
  this.totGames = 0;
  this.totWins = 0;
  this.setCurrentTheme = function (theme) {
    this.currentTheme = theme;
  };
  this.resetGamePlayCharacter = function () {
    this.gamePlayCharacter = this.currentTheme.charsList[Math.floor((Math.random()*this.currentTheme.charsList.length))];
    this.gamePlayCharacter
  };
  this.newCharLtrBox = function (i) {
    var nameDisplay = document.getElementById("nameDisplay");
    var newP = document.createElement("p");
    newP.classList += "data-box";
    var newSpan = document.createElement("span");
    newSpan.id = "charLtr" + i;

    newP.appendChild(newSpan);
    nameDisplay.appendChild(newP);
  };
  this.displayCharName = function () {
    for( var i=0; i<this.gamePlayCharacter.upNameLtrsArr.length; i++) {
      this.newCharLtrBox(i);
    }
  };
  this.displayRight = function () {
    for (var i=0; i<this.gamePlayCharacter.upNameLtrsArr.length; i++) {
      document.getElementById("charLtr" + i).textContent = this.rightLetters[i];
    }
  };
  this.renderGameBoard = function () {
    document.getElementById("wrong-guesses-remain").textContent = this.wrongGuessesRemain;
    document.getElementById("charImgSRC").src = this.gamePlayCharacter.imgSRC;
    document.getElementById("letters-used").textContent = this.wrongLetters;
    this.displayCharName();
    this.displayRight();
    document.getElementById("tot-games").textContent = this.totGames;
    document.getElementById("tot-wins").textContent = this.totWins;
  };
  this.postMoveRender = function () {
    document.getElementById("wrong-guesses-remain").textContent = this.wrongGuessesRemain;
    document.getElementById("letters-used").textContent = this.wrongLetters;
    this.displayRight();
  };
  this.newGame = function() {
    var row = document.getElementById("nameDisplay");
    while (row.hasChildNodes()) {
      row.removeChild(row.firstChild);
    }

    this.resetGamePlayCharacter();
    this.userGuess = "";
    this.wrongLetters = [];
    this.rightLetters = [];
    this.wrongGuessesRemain = 5;
  };
  this.gameOverLose = function() {
    this.totGames++;
    this.newGame();
    this.renderGameBoard();
  };
  this.gameOverWin = function () {
    this.totGames++;
    this.totWins++;
    this.newGame();
    this.renderGameBoard();
  }
  this.guessComparison = function () {
    var count = 0;

    //
    //   Loop compares userGuess to the right answer and updates the rightLetters or wrongLetters arrays as needed
    //
    for (var i=0; i<this.gamePlayCharacter.upNameLtrsArr.length; i++) {
      if (this.userGuess === this.gamePlayCharacter.upNameLtrsArr[i]) {
        this.rightLetters[i] = this.userGuess;
      }
      else {
        if (this.rightLetters[i] === " " && this.rightLetters[i] === undefined) {
          this.rightLetters[i] = " ";
        }
        count++
      }
    }

    //
    //    Updates wrongGuessesRemaining and wrongLetters array
    //
    if (count >= this.gamePlayCharacter.upNameLtrsArr.length) {
      this.wrongGuessesRemain--;
      this.wrongLetters.push(this.userGuess);
    }
    this.postMoveRender();

    //
    //    Determines the end of game
    //
    if (this.wrongGuessesRemain <= 0) {
      this.gameOverLose();
    }
    else {
      var rightCount = 0;
      for( var i=0; i<this.gamePlayCharacter.upNameLtrsArr.length; i++) {
        if (this.rightLetters[i] === this.gamePlayCharacter.upNameLtrsArr[i]) {
          rightCount++;
        }
        if (rightCount === this.gamePlayCharacter.upNameLtrsArr.length) {
          this.gameOverWin();
        }
      }
    }

  };
  this.resetGame = function () {
    this.newGame();
    this.totGames = 0;
    this.totWins = 0;
    this.renderGameBoard();
  }
  
}





