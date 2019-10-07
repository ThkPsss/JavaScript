// Globals

var wordOptions = ["naruto", "one piece", "bleach", "one punch man", "demon slayer", "food wars"]
var selectedWord = "";
var lettersinWord = [];
var numBlacks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

//Functions

function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersinWord = selectedWord.split("");

    console.log(selectedWord);
    console.log(lettersinWord);
}
//Main Process