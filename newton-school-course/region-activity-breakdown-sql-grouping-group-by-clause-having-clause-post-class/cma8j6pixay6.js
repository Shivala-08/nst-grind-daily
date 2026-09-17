SELECT region, COUNT(*) AS player_count
FROM players
GROUP BY region
HAVING COUNT(*) >= 2;

SELECT region, COUNT(*) AS active_player_count
FROM players
WHERE player_status = 'Active'
GROUP BY region;