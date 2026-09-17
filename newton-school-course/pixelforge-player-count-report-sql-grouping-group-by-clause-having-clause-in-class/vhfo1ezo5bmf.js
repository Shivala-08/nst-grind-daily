SELECT region, COUNT(*) AS player_count
FROM players
GROUP BY region;