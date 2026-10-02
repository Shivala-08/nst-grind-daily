SELECT 
    c.CustomerName, 
    c.Email, 
    COUNT(o.OrderID) AS TotalOrders, 
    ROUND(AVG(o.OrderValue), 2) AS AverageOrderValue
FROM 
    Customers c
JOIN 
    Orders o ON c.CustomerID = o.CustomerID
GROUP BY 
    c.CustomerID, 
    c.CustomerName, 
    c.Email
ORDER BY 
    TotalOrders DESC;