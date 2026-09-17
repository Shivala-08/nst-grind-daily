SELECT 
    CONCAT(last_name,',',first_name),
    CONCAT(UPPER(LEFT(last_name,3))),
    department
FROM Employees ORDER BY