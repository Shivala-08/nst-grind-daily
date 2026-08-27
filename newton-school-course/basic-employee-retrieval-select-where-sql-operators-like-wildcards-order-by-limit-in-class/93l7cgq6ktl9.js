-- Hint 1: Use concatenation to combine first_name and last_name into one column.



-- Hint 3: Use AS to assign custom column names in the output.

SELECT 
    first_name || ' ' || last_name AS full_name, 
    job_title, 
    salary 
FROM employees;


SELECT * 
FROM employees;

SELECT 
    emp_id AS "Employee ID", 
    email AS "Email Address", 
    department AS "Department Name" 
FROM employees;