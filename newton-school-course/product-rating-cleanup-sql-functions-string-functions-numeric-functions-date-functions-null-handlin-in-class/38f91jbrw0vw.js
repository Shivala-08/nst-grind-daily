SELECT 
    product_name, 
    ABS(raw_rating) AS clean_rating, 
    ROUND(ABS(raw_rating), 1) AS rounded_rating, 
    ROUND(ABS(ROUND(ABS(raw_rating), 1) - system_b_avg), 2) AS deviation
FROM 
    products
WHERE 
    ABS(ROUND(ABS(raw_rating), 1) - system_b_avg) > 0.5
ORDER BY 
    deviation DESC;