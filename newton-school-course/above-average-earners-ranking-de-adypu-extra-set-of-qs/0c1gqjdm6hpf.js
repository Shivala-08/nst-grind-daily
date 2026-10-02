WITH RankedEmployees AS (
    SELECT 
        department,
        employee_name,
        salary,
        DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) as department_rank,
        AVG(salary) OVER (PARTITION BY department) as avg_salary
    FROM employees
)
SELECT 
    department,
    employee_name,
    salary,
    department_rank
FROM RankedEmployees
WHERE salary > avg_salary
ORDER BY department ASC, department_rank ASC, employee_name ASC;