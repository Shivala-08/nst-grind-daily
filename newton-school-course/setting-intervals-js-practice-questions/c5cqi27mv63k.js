function repeatMessage(message, interval) {
  const intervalId = setInterval(() => {
    console.log(message);
  }, interval);

  return function stopRepeating() {
    clearInterval(intervalId);
    console.log("Interval cleared.");
  };
}