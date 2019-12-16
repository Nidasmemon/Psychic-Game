// Declaring variables to hold the number of wins, losses, guesses left, and guesses so far.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuesses = [];

// Creating a function to generate a random letter.
function randomGen() {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    randomLetter = letters.charAt(Math.floor(Math.random() * letters.length));
    return randomLetter;
}  

// Declaring a variable to hold a random letter.
var randomLetter = randomGen();

console.log(randomLetter);

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Variables holding targeted HTML id values.
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesLeftText = document.getElementById("guessesLeft-text");
    var guessSoFarText = document.getElementById("guessSoFar-text");


    // Determines which key was pressed.
    var userGuess = event.key;
    userGuesses.push(userGuess);
  

    //Determines the outcome of the user guess.
      if (guessesLeft > 0) {
          if (userGuess === randomLetter) {
              wins++;
          }
      
          else{
              guessesLeft--;
          }
      } 
  
      if (guessesLeft === 0) {
          randomGen();
          losses++;
      }

      // Creating function to restart the game.
      function restart() {
          randomGen();
          guessesLeft = 9;
          userGuesses = [];
      }
  
      if (guessesLeft === 0 || userGuess === randomLetter) {
          restart();
      }
  
      console.log(randomLetter);
  
      // Displays the wins/losses/guesses left/guesses so far.
      winsText.textContent = "Wins: " + wins;
      lossesText.textContent = "Losses: " + losses;
      guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
      guessSoFarText.textContent = "Your Guesses so far: " + userGuesses;
  };