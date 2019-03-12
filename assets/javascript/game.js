    // declare variables

    // computer options
    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // variables for wins, losses, draws and guesses
    var wins = 0;
    var losses = 0;
    var guessesLeft = 5;

    // computer to pick random letter from array
    var computerChoice = options[Math.floor(Math.random()*options.length)];

    // Need to capture users choice using onkeyup.
    document.onkeyup = function() {

        // Captures key press, converts to lowercase & stores it in a variable.
        var userGuess = event.key.toLowerCase();

        // start comparisons
        // if (userGuess === computerChoice) {
        //     wins++;
        // } else {
        //     guesses--;
        // } if (guesses === 0) {
        //     losses++;
        // }
        if (userGuess === computerChoice) {
            // increment wins
            wins++;
        } else {
            // increment losses && decrement # of guesses left.
            losses++, guessesLeft--;
        } if (guessesLeft === 0) {
            // reset vars to start game again.
            wins = 0, losses = 0, guessesLeft = 5;
        }
        
    // Update DOM to reflect changes.
    var html = "<p>Guess what letter I'm thinking of...</p>" + "<p>Wins: </p>" + wins + "<p>Losses: </p>" + losses + "<p>Guesses Left: " + guessesLeft + "</p>";

    document.querySelector("#game").innerHTML = html;
    }