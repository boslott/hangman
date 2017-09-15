//
//  Theme page for Hangman-Style-Game
//
//  Slott Family Theme
//  September 16, 2017
//  Bo Slott
//


//  create the slottFamily theme object
var slottFamily = new Theme ();

//  name the theme object
slottFamily.name = "Slott Family";


//  create the character objects and put them into an array
var bo = new Character ("Bo", "assets/themes/slottFamilyImgs/bo.jpg");
slottFamily.charsList.push(bo);

var heather = new Character ("Heather", "assets/themes/slottFamilyImgs/heather.jpg");
slottFamily.charsList.push(heather);

var davis = new Character ("Davis", "assets/themes/slottFamilyImgs/davis.jpg");
slottFamily.charsList.push(davis);

var fletcher = new Character ("Fletcher", "assets/themes/slottFamilyImgs/fletcher.jpg");
slottFamily.charsList.push(fletcher);

