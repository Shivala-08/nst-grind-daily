function processScores(scores, ...callbacks) {
  // Apply each callback function sequentially to every score in the array
  return callbacks.reduce((currentScores, callback) => {
    return currentScores.map(score => callback(score));
  }, scores);
}