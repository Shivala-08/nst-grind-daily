SELECT 
    branch, 
    ROUND(avg_balance, 2) AS avg_balance
FROM (
    SELECT branch, AVG(balance) AS avg_balance
    FROM accounts
    GROUP BY branch
) b
WHERE avg_balance > 60000;