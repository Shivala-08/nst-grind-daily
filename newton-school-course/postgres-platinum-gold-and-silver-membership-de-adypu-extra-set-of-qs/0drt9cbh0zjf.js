WITH customer_spending AS (
    SELECT 
        customer_id, 
        SUM(amount) AS total_spent
    FROM 
        orders
    GROUP BY 
        customer_id
),
average_spending AS (
    SELECT 
        AVG(total_spent) AS avg_total_spent
    FROM 
    customer_spending
)
SELECT 
    c.customer_id, 
    c.total_spent,
    CASE 
        WHEN c.total_spent > 1000 THEN 'Platinum'
        WHEN c.total_spent BETWEEN 500 AND 1000 THEN 'Gold'
        ELSE 'Silver'
    END AS status
FROM 
    customer_spending c, 
    average_spending a
WHERE 
    c.total_spent > a.avg_total_spent
ORDER BY 
    c.customer_id ASC;