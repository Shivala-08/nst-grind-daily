async function runUntilRejected() {
  while (true) {
    try {
      const result = await asyncOperation();
      console.log(result);
    } catch (error) {
      console.log(error);
      break;
    }
  }
}

runUntilRejected();