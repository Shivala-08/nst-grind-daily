const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];
rl.on('line', (line) => {
    inputLines.push(line.trim());
});

rl.on('close', () => {
    if (inputLines.length === 0) return;
    
    let lineIdx = 0;
    let t = parseInt(inputLines[lineIdx++]);
    
    let results = [];
    
    while (t > 0 && lineIdx < inputLines.length) {
        if (inputLines[lineIdx] === "") {
            lineIdx++;
            continue;
        }
        
        let [n, target] = inputLines[lineIdx++].split(/\s+/).map(Number);
        let nums = inputLines[lineIdx++].split(/\s+/).map(Number);
        
        let found = false;
        // Check all possible triplets (i, j, k)
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                for (let k = j + 1; k < n; k++) {
                    if (nums[i] + nums[j] + nums[k] === target) {
                        found = true;
                        break;
                    }
                }
                if (found) break;
            }
            if (found) break;
        }
        
        results.push(found ? "YES" : "NO");
        t--;
    }
    
    console.log(results.join('\n'));
});
for _ in range(t):
    # Write your code here