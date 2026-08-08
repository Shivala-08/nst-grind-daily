const fs = require('fs');

// Read input from standard input and save it in variable N
const input = fs.readFileSync(0, 'utf-8').trim();
const N = parseInt(input, 10);

// 1. Multiply the number(N) by 2.
let result = N * 2;

// 2. Add 10 to the result.
result += 10;

// 3. Divide the result by 2.
result /= 2;

// 4. Subtract the original number N from the result.
result -= N;

// 5. Finally, print the final result.
console.log(result);