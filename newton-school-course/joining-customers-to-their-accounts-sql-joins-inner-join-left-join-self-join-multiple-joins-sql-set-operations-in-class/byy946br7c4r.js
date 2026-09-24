SELECT 
    c.customer_name, 
    a.account_type, 
    a.balance
FROM 
    customers c
INNER JOIN 
    accounts a ON c.customer_id = a.customer_id
ORDER BY 
    a.balance DESC;