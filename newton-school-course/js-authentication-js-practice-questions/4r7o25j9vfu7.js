function authenticateUser(username, password, users) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Check if user exists in the object and the password matches
      if (users[username] && users[username] === password) {
        resolve(`Login successful for user: ${username}`);
      } else {
        reject("Authentication failed. Invalid username or password.");
      }
    }, 3000);
  });
}