    // declare variables

    // computer options
    var options = ["a", "b", "c", "d", "e", "f", "g"];

    // variables for wins, losses, draws and guesses
    var wins = 0;
    var losses = 0;
    var guesses = 5;

    // computer to pick random letter from array
    var computerChoice = options[Math.floor(Math.random()*options.length)];

    // Need to capture users choice using onkeyup.
    document.onkeyup = function() {

        // Captures key press, converts to lowercase & stores it in a variable.
        var userGuess = event.key.toLowerCase();

        // start comparisons
        if (userGuess === computerChoice) {
            wins++;
        } else {
            guesses--;
        } if (guesses === 0) {
            losses++;
        } 
    // Update DOM to reflect changes.
    var html = "<p>Wins: </p>" + wins + "<p>Losses: </p>" + losses + "<p>Guesses: " + guesses + "</p>";

    document.querySelector("#game").innerHTML = html;
    }