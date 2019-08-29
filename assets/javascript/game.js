//Array listing options for computer
var computersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var wins = 0;
var losses = 0;
var guessesRemaining = 9;
var lettersGuessed = [];
var computerLetter = computersArray[Math.floor(Math.random() * computersArray.length)];

//Variables linked to HTML IDs 
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesRemainingText = document.getElementById("remaining");
var lettersGuessedText = document.getElementById("guessed");

//Set a computer guess to the console
var computerLetter = computersArray[Math.floor(Math.random() * computersArray.length)];
console.log("The computer guessed: " + computerLetter);

//This function is run whenever the user presses a key
document.onkeyup = function (event) {

    var userGuess = event.key;
    console.log("You Guessed: " + userGuess);


    //Handles correct guesses
    if (userGuess === computerLetter) {
        wins++;
        console.log("Now the computer guessed " + computerLetter);
    } else {
        guessesRemaining--;
        lettersGuessed.push(userGuess);
        lettersGuessedText.textContent = userGuess;
    }

    //Resets game when guesses run out
    if (guessesRemaining === 0) {
        losses++;
        guessesRemaining = 9;
        console.log("Now the computer guessed " + computerLetter);
    }

    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessesRemainingText.textContent = guessesRemaining;
}

//Tried to push "userGuess" to "lettersGuessed" array to show multiple guessed letters
//Computer pulls a random letter, but retains the same letter for each round