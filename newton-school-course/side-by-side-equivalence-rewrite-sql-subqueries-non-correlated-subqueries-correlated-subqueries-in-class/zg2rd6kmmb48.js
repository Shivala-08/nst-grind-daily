SELECT 
    a.account_holder, 
    a.branch, 
    a.balance
FROM accounts a
JOIN (
    SELECT branch, AVG(balance) AS avg_balance
    FROM accounts
    GROUP BY branch
) b ON a.branch = b.branch
WHERE a.balance > b.avg_balance;