SELECT 
    COUNT(CASE WHEN QUARTER(joining_date) = 1 THEN 1 END) AS Q1_joins,
    COUNT(CASE WHEN QUARTER(joining_date) = 2 THEN 1 END) AS Q2_joins,
    COUNT(CASE WHEN QUARTER(joining_date) = 3 THEN 1 END) AS Q3_joins,
    COUNT(CASE WHEN QUARTER(joining_date) = 4 THEN 1 END) AS Q4_joins
FROM employees;