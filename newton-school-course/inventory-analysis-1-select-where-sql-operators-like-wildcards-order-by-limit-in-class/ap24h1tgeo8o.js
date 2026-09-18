SELECT product_name,rating,reviews_count 
FROM products
ORDER BY rating,reviews DESC
LIMIT 1;