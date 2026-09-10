SELECT game_category, COUNT(*) AS total_players, SUM(points) AS total_points
FROM PLAYER_STATS
GROUP BY game_category;
SELECT game_category, SUM(points) AS total_points
FROM PLAYER_STATS
GROUP BY game_category
ORDER BY total_points DESC;