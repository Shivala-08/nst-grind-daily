SELECT 
    account_holder, 
    branch, 
    account_type, 
    balance
FROM accounts a
WHERE balance > (
    SELECT AVG(balance)
    FROM accounts
    WHERE branch = a.branch
);