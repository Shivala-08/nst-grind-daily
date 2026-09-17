function findWinner(scores) {
    // Naman starts first (index 0, 2, 4, ...) and Arun goes second (index 1, 3, 5, ...)
    for (let i = 0; i < scores.length; i++) {
        // Check if the current player's score is negative
        if (scores[i] < 0) {
            // Even indices belong to Naman, so if Naman gets a negative score, Arun wins.
            // Odd indices belong to Arun, so if Arun gets a negative score, Naman wins.
            return i % 2 === 0 ? "Arun" : "Naman";
        }
    }
}