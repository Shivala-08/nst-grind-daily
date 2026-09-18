SELECT emp_name FROM employee_performance WHERE bonus IS NULL;

SELECT 
    emp_name, 
    COALESCE(CAST(bonus AS TEXT), 'Not Awarded') AS bonus_display,
    COALESCE(ROUND(CAST((sales_achieved * 100.0) / NULLIF(sales_target, 0) AS NUMERIC), 1), 0) AS achievement_pct
FROM employee_performance
WHERE sales_target IS NOT NULL
ORDER BY achievement_pct DESC;