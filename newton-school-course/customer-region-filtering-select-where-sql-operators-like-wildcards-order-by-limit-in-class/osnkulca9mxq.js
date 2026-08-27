SELECT * 
FROM Customers 
WHERE region IN ('Asia-Pacific', 'Middle East');

SELECT * 
FROM Customers 
WHERE country IN ('Japan', 'India', 'China');


SELECT * 
FROM Customers 
WHERE account_type IN ('Business', 'Enterprise');

SELECT * 
FROM Customers 
WHERE region NOT IN ('North America', 'Europe');