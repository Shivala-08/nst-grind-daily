SELECT 
account_holder,branch,balance,
RANK(balance) OVER (PARTITION BY branch
ORDER BY balance DESC) AS rn
FROM accounts;