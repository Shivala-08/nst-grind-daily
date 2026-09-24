SELECT * 
FROM accounts 
WHERE account_id NOT IN (
    SELECT account_id 
    FROM transactions 
    WHERE account_id IS NOT NULL
);