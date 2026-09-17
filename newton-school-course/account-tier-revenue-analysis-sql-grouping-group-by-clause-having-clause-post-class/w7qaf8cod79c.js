SELECT 
    account_tier, 
    SUM(wallet_balance) AS total_wallet_balance, 
    AVG(wallet_balance) AS avg_wallet_balance
FROM 
    players
GROUP BY 
    account_tier
HAVING 
    SUM(wallet_balance) > 150000
ORDER BY 
    total_wallet_balance DESC;