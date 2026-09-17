const fs = require('fs');

function processScores(scores, ...callbacks) {
    return callbacks.reduce((currentScores, callback) => {
        return currentScores.map(score => callback(score));
    }, scores);
}

function solve() {
    const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
    if (input.length === 0 || !input[0]) return;

    const scores = JSON.parse(input[0].trim());
    
    const callbacks = [];
    for (let i = 1; i < input.length; i++) {
        const line = input[i].trim();
        if (line === 'done' || line === '') break;
        
        const callbackFn = (0, eval)('(' + line + ')');
        callbacks.push(callbackFn);
    }

    const result = processScores(scores, ...callbacks);
    console.log(result);
}

solve();