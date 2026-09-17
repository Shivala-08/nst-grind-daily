function analyzeScores(scores) {
    // Extract matches where the player has a score greater than or equal to 50
    const filteredScores = scores.filter(score => score >= 50);
    
    // Return 0 if no match has a score greater than or equal to 50
    if (filteredScores.length === 0) {
        return 0;
    }
    
    // Calculate the average score of these Matches
    const totalScore = filteredScores.reduce((sum, score) => sum + score, 0);
    const averageScore = totalScore / filteredScores.length;
    
    return averageScore;
}