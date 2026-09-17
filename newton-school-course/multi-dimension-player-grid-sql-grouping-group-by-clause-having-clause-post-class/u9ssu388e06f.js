SELECT 
    region, 
    account_tier, 
    COUNT(*) AS player_count
FROM players
WHERE player_status = 'Active'
GROUP BY region, account_tier
HAVING COUNT(*) > 1;