SELECT 
account_holder,branch,balance,
RANK() OVER (PARTITION BY branch
ORDER BY balance DESC) AS rn
FROM accounts;