function analyzeExamScores(scores, negativeScoreIndex) {
    // 1. Remove the negative score using the provided index
    const validScores = scores.filter((_, index) => index !== negativeScoreIndex);

    // 2. Separate into pass (above 30) and fail (30 or below)
    const passScores = validScores.filter(score => score > 30);
    const failScores = validScores.filter(score => score <= 30);

    // 3. Return the combined array
    return [...passScores, ...failScores];
}