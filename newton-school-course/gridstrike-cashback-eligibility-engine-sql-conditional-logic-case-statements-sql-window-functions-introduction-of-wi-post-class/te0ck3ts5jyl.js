-- Query 1: Display all regions with their eligibility status
SELECT 
    region, 
    SUM(wallet_balance) AS total_active_balance,
    CASE 
        WHEN SUM(wallet_balance) > 100000 THEN 'Eligible'
        ELSE 'Not Eligible'
    END AS eligibility_status
FROM players
WHERE player_status = 'Active'
GROUP BY region;

-- Query 2: Display only eligible regions
SELECT 
    region, 
    SUM(wallet_balance) AS total_active_balance,
    CASE 
        WHEN SUM(wallet_balance) > 100000 THEN 'Eligible'
        ELSE 'Not Eligible'
    END AS eligibility_status
FROM players
WHERE player_status = 'Active'
GROUP BY region
HAVING SUM(wallet_balance) > 100000;