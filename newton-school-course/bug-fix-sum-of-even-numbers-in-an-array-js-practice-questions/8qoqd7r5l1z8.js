const fs = require('fs');

function solve() {
    const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();
    if (!input) return;
    
    const inventory = JSON.parse(input);
    const count = Object.keys(inventory).length;
    
    console.log(`Total items: ${count}`);
}

solve();