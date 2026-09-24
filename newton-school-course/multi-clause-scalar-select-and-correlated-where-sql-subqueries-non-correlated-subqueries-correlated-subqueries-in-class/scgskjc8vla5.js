SELECT 
    account_holder, 
    branch, 
    ROUND(balance, 2) AS balance,
    ROUND((SELECT AVG(balance) FROM accounts WHERE branch = a.branch), 2) AS branch_avg,
    ROUND(balance - (SELECT AVG(balance) FROM accounts WHERE branch = a.branch), 2) AS balance_diff,
    CASE 
        WHEN balance - (SELECT AVG(balance) FROM accounts WHERE branch = a.branch) > 100000 THEN 'Significantly Above'
        ELSE 'Moderately Above'
    END AS performance_label
FROM accounts a
WHERE balance > (
    SELECT AVG(balance)
    FROM accounts
    WHERE branch = a.branch
)
ORDER BY balance_diff DESC;