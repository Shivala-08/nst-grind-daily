SELECT 
    CONCAT(last_name, ', ', first_name) AS display_name,
    CONCAT(UPPER(SUBSTRING(last_name, 1, 3)), emp_id) AS emp_code,
    department
FROM employees
ORDER BY last_name;