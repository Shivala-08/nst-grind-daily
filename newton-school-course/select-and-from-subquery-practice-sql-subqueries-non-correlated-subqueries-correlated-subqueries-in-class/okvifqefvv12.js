SELECT 
    b.branch, 
    b.total_balance, 
    (b.total_balance - (SELECT AVG(balance) FROM accounts)) AS diff_from_overall
FROM (
    SELECT branch, SUM(balance) AS total_balance
    FROM accounts
    GROUP BY branch
) b
WHERE b.total_balance > 200000;