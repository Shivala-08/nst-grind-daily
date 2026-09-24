SELECT 
    account_id, 
    customer_name, 
    balance 
FROM accounts a 
WHERE EXISTS (
    SELECT 1 
    FROM transactions t 
    WHERE t.account_id = a.account_id
);