SELECT 
    customer_name, 
    annual_spending,
    CASE 
        WHEN annual_spending < 20000 THEN 'Silver'
        WHEN annual_spending BETWEEN 20000 AND 50000 THEN 'Gold'
        ELSE 'Platinum'
    END AS membership_tier
FROM customer_spending;