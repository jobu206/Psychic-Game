// declare variables

// computer options
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// variables for wins, losses, draws and guesses
var wins = 0;
var losses = 0;
var guessesLeft = 5;
var computerChoice;

function newLetter() {
    computerChoice = options[Math.floor(Math.random() * options.length)];
    console.log("computer choice: " + computerChoice);
}

function reset() {
    newLetter();
    guessesLeft = 5;
}

// computer to pick random letter from array
newLetter();

// Need to capture users choice using onkeyup.
document.onkeyup = function () {

    // Captures key press, converts to lowercase & stores it in a variable.
    var userGuess = event.key.toLowerCase();

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
    var html = "<p>Guess what letter I'm thinking of...</p>" + "<p>Wins: </p>" + wins + "<p>Losses: </p>" + losses + "<p>Guesses Left: " + guessesLeft + "</p>";

    document.querySelector("#game").innerHTML = html;
}


/* 
1. computer gets a letter from list
2. user picks a letter
3. compare to computer's choice
4. If same, you win the game
    a. Game starts over.
5. if not, then you lose a turn and lose the game
    a. Losses/wins stay. Game starts over.


*/