


var computersGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

document.onkeyup = function () {
    
// Logs the letters guessed on the keyboard   

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

// Pulls a random item from the hangmanWords array

    var randomWord = computersGuess[Math.floor(Math.random() * computersGuess.length)];

    console.log(userGuess);
    addLetters();

    function addLetters() {
        document.getElementById("alreadyGuessed"),textContent = userGuess;
    } 
    document.onkeyup = function (event) {
        var userGuess = event.key;

}
}