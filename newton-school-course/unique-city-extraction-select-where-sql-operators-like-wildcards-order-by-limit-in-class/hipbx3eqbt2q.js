-- Hint 1: Use DISTINCT to display only unique city names.

-- Hint 2: DISTINCT can also be applied to multiple columns together.

-- Hint 3: Combine COUNT() with DISTINCT to count unique values.

-- Hint 4: Retrieve unique membership types without duplicates.


SELECT DISTINCT city 
FROM Customers;

SELECT DISTINCT city, state 
FROM Customers;

SELECT COUNT(DISTINCT city) AS unique_city_count 
FROM Customers;


SELECT DISTINCT membership 
FROM Customers;