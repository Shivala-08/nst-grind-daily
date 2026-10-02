SELECT 
    UPPER(LEFT(customer_name, 5)) AS name_prefix, 
    customer_name, 
    email 
FROM 
    Customers 
WHERE 
    email LIKE '%gmail.com';