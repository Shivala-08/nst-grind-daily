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