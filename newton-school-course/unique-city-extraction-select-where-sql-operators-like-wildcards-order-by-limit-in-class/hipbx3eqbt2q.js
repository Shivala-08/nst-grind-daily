-- Hint 1: Use DISTINCT to display only unique city names.

-- Hint 2: DISTINCT can also be applied to multiple columns together.

-- Hint 3: Combine COUNT() with DISTINCT to count unique values.

-- Hint 4: Retrieve unique membership types without duplicates.

-- 1. Retrieve unique cities
SELECT DISTINCT city 
FROM Customers;

-- 2. Retrieve unique city-state combinations
SELECT DISTINCT city, state 
FROM Customers;

-- 3. Count the number of unique cities
SELECT COUNT(DISTINCT city) AS unique_city_count 
FROM Customers;

-- 4. Retrieve unique membership tiers
SELECT DISTINCT membership 
FROM Customers;