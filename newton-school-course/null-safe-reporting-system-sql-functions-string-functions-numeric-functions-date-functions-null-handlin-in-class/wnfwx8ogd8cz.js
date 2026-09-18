SELECT emp_name FROM employee_performance WHERE bonus IS NULL;

SELECT 
    emp_name, 
    COALESCE (CAST(bonus AS TEXT),0) AS bonus_display,
    COALESCE(ROUND(salesa_achieved))