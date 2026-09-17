SELECT region, COUNT(*) AS player_count
FROM players
GROUP BY region;
SELECT 
    account_tier, 
    SUM(wallet_balance) AS total_wallet_balance, 
    AVG(wallet_balance) AS average_wallet_balance
FROM players
GROUP BY account_tier;