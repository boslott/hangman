//
//    Theme page for Hangman-Style-Game
//
//    Pokemon Theme
//    September 16, 2017
//    Bo Slott


//  Create the pokemon theme object
var pokemonTheme = new Theme ();

//  Name the object
pokemonTheme.name = "Pokemon";

//  Create the character objects and put them into an array
var charizard = new Character ("Charizard", "assets/themes/pokemonImgs/charizard.png");
pokemonTheme.charsList.push(charizard);

var butterfree = new Character ("Butterfree", "assets/themes/pokemonImgs/butterfree.png");
pokemonTheme.charsList.push(butterfree);

var beedrill = new Character ("Beedrill", "assets/themes/pokemonImgs/beedrill.png");
pokemonTheme.charsList.push(beedrill);

var arbok = new Character ("Arbok", "assets/themes/pokemonImgs/arbok.png");
pokemonTheme.charsList.push(arbok);