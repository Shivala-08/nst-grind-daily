SELECT 
    c.cust_id,
    c.cust_name,
    COALESCE(SUM(o.amount), 0) AS total_spent
FROM Customers c
JOIN Orders o 
    ON c.cust_id = o.cust_id
WHERE YEAR(o.order_date) = 2025
GROUP BY c.cust_id, c.cust_name
HAVING COALESCE(SUM(o.amount), 0) > 4000;