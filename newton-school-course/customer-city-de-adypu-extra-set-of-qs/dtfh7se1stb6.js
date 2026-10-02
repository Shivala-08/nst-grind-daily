SELECT 
    COUNT(*) AS Total_Customers,
    ROUND(AVG(Age), 2) AS Average_Age
FROM 
    Customers
WHERE 
    City = 'Bangalore';