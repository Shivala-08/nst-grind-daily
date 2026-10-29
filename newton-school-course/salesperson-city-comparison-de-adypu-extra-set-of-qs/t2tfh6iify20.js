SELECT 
    p.sp_id, 
    p.sp_name, 
    ROUND(AVG(s.amount), 2) AS avg_sales
FROM 
    Salespeople p
JOIN 
    Sales s ON p.sp_id = s.sp_id
WHERE 
    p.city IN (
        SELECT city 
        FROM Salespeople 
        GROUP BY city 
        HAVING COUNT(*) > 1
    )
    AND YEAR(s.sale_date) = 2025
GROUP BY 
    p.sp_id, 
    p.sp_name
HAVING 
    AVG(s.amount) > 15000;