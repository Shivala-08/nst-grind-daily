SELECT 
    account_id, 
    customer_name, 
    branch, 
    balance
FROM accounts a
WHERE balance > (
    SELECT AVG(balance)
    FROM accounts
    WHERE branch = a.branch
);