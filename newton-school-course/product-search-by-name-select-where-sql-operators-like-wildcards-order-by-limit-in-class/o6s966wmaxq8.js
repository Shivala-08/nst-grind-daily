-- Hint 1: Use LIKE with % wildcards.

-- Hint 2: Match values starting with a word.

-- Hint 3: Match values ending with a word.

-- Hint 4: Combine LIKE with another condition.

SELECT * FROM Products WHERE product_name LIKE '%Samsung%';

SELECT * FROM Products WHERE product_name LIKE 'Apple%';

SELECT * FROM Products WHERE product_name LIKE '%Laptop';

SELECT * FROM Products WHERE category = 'Audio' AND product_name LIKE '%Headphones%';