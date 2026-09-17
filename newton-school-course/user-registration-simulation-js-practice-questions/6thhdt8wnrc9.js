async function register(user) {
  try {
    const response = await registerUser(user);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}