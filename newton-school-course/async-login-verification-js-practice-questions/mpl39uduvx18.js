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
let isProcessed = false;

rl.on('line', (line) => {
    if (isProcessed) return;
    inputLines.push(line);
    if (inputLines.length === 2) {
        isProcessed = true;
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