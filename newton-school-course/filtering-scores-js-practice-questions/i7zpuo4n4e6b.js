function processScores(scores, ...callbacks) {
    return scores.filter(score => {
        // Check if every callback function returns a truthy value for the score
        return callbacks.every(callback => callback(score));
    });
}