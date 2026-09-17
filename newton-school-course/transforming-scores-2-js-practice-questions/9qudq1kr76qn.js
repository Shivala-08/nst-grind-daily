function processScores(scores, callbacks) {
  return callbacks.reduce((currentScores, callback) => {
    return currentScores.map(score => callback(score));
  }, scores);
}

// Add this block below your function to handle test inputs:
const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
    if (input.length === 0 || !input[0]) return;

    const scores = JSON.parse(input[0].trim());
    
    const callbacks = [];
    for (let i = 1; i < input.length; i++) {
        const line = input[i].trim();
        if (line === 'done' || line === '') break;
        
        // Safely evaluate each callback string into an executable function
        const callbackFn = (0, eval)('(' + line + ')');
        callbacks.push(callbackFn);
    }

    const result = processScores(scores, callbacks);
    console.log(result);
}

solve();