SELECT 
    City,
    COUNT(*) AS Total_Customers,
    ROUND(AVG(Age), 2) AS Average_Age
FROM 
    Customers
WHERE 
    Country = 'India'
GROUP BY 
    City
ORDER BY 
    Total_Customers DESC;