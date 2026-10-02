SELECT employee_id, 
       CONCAT(SUBSTRING(first_name, 1, 3), SUBSTRING(last_name, 1, 2)) AS initials 
FROM employees;