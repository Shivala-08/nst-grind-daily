SELECT * 
FROM accounts 
WHERE balance > (
    SELECT AVG(balance) 
    FROM accounts
);