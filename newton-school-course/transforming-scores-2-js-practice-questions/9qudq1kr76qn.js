function processScores(scores, callbacks) {
  return callbacks.reduce((currentScores, callback) => {
    return currentScores.map(score => callback(score));
  }, scores);
}
console.log()