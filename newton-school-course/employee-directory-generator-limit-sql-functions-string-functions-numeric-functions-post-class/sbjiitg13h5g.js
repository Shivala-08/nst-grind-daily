SELECT 
    CONCAT(last_name,',',first_name),
    CONCAT(UPPER(LEFT(last_name,3)),emp_id),
    department
FROM Employees ORDER BY last_name ASC