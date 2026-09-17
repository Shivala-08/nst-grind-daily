SELECT 
    CONCAT(UPPER(last_name), ', ', UPPER(first_name)) AS full_name,
    REPLACE(phone, ' ', '-') AS formatted_phone,
    TO_CHAR(reg_date, 'DD FMMonth YYYY') AS joined_on,
    CONCAT(UPPER(tier), '-', UPPER(SUBSTRING(last_name FROM 1 FOR 3)), '-', cust_id) AS profile_code
FROM 
    customer_profiles
ORDER BY 
    tier, 
    cust_id;