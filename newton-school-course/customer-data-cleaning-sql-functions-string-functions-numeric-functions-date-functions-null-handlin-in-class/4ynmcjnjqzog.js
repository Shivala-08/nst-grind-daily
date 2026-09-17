SELECT 
    customer_id,
    UPPER(full_name) AS name_upper,
    LOWER(city) AS city_clean,
    LOWER(TRIM(email)) AS email_clean,
    LENGTH(LOWER(TRIM(email))) AS email_length
FROM customers
ORDER BY email_length ASC;