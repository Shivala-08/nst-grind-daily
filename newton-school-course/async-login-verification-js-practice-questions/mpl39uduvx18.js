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
    inputLines.push(line.trim());
    if (inputLines.length === 2) {
        rl.close();
        login(inputLines[0], inputLines[1])
            .then(console.log)
            .catch(console.log);
    }
});