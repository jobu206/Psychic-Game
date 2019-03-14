
// computer options
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// variables for wins, losses, draws and guesses
var wins = 0;
var losses = 0;
var lettersGuessed = [];
var guessesLeft = 10;
var computerChoice;

//  Function to choose new letter
function newLetter() {
    computerChoice = options[Math.floor(Math.random() * options.length)];
}

// Function to push lettersGuessed into userGuess. This is used to post user guesses.
function guesses() {
    lettersGuessed.push(userGuess);
}

// Function to reset vars
function reset() {
    newLetter();
    lettersGuessed = [];
    guessesLeft = 10;
}

// computer to pick random letter from array
newLetter();

// Need to capture users choice using onkeyup.
document.onkeyup = function () {

    // Captures key press, converts to lowercase & stores it in a variable.
    var userGuess = event.key.toLowerCase();
    lettersGuessed.push(userGuess);

    // start comparisons

    if (userGuess === computerChoice) {
        // increment wins
        wins++; 
        reset();
        // changed options to newLetter
    } else {
        // increment losses && decrement # of guesses left.
        guessesLeft--;
    } 
    
    if (guessesLeft === 0) {
        // reset vars to start game again.
        losses++;
        reset();
    }

    // Update DOM to reflect changes.
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("lettersGuessed").textContent = lettersGuessed;
    document.getElementById("guessesLeft").textContent = guessesLeft;

}
