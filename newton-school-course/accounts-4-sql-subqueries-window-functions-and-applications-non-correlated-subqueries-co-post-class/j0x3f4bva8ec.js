SELECT * 
FROM accounts 
WHERE branch NOT IN (
    SELECT branch 
    FROM accounts 
    WHERE balance > 75000
);