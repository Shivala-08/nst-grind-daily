function processScores(scores, modifier1, modifier2) {
    // Apply modifier1 to each score, then apply modifier2 to the result
    return scores.map(score => modifier2(modifier1(score)));
}