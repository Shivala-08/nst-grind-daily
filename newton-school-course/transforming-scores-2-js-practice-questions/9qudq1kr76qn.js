const fs = require('fs');

function processScores(scores, ...callbacks) {
    // Apply each callback function sequentially to every element in the scores array
    return callbacks.reduce((currentScores, callback) => {
        return currentScores.map(score => callback(score));
    }, scores);
}

function solve() {
    const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
    if (input.length === 0 || !input[0]) return;

    // Parse the initial scores array
    const scores = JSON.parse(input[0].trim());
    
    // Collect and evaluate the callback functions from subsequent lines
    const callbacks = [];
    for (let i = 1; i < input.length; i++) {
        const line = input[i].trim();
        if (line === 'done' || line === '') break;
        
        // Evaluate the string representation of the callback function safely
        // (Using indirect eval or standard eval to turn function strings into executable functions)
        const callbackFn = (0, eval)('(' + line + ')');
        callbacks.push(callbackFn);
    }

    // Process the scores and print the resulting array
    const result = processScores(scores, ...callbacks);
    console.log(result);
}

solve();