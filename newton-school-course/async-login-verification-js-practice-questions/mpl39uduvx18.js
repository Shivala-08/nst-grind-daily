const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function login(username, password) {
    return new Promise((resolve, reject) => {
        if (!username || !password || username.trim() === "" || password.trim() === "") {
            reject("Invalid input");
        } else if (username === "admin" && password === "1234") {
            resolve("Login successful");
        } else {
            reject("Invalid credentials");
        }
    });
}

let inputLines = [];

rl.on('line', (line) => {
    inputLines.push(line);
    if (inputLines.length === 2) {
        rl.close();
        const username = inputLines[0];
        const password = inputLines[1];

        login(username, password)
            .then((message) => {
                console.log(message);
            })
            .catch((error) => {
                console.log(error);
            });
    }
});