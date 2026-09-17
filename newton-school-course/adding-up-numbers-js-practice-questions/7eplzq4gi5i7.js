function addNumbers(...args) {
  return args.reduce((sum, current) => sum + current, 0);
}

// Node.js standard input reading (if the platform requires handling stdin)
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\s+/);

if (input.length > 0 && input[0] !== '') {
  const numbers = input.map(Number);
  console.log(addNumbers(...numbers));
}