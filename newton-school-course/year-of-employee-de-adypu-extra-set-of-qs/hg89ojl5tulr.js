SELECT 
    SUM(CASE WHEN YEAR(joining_date) = YEAR(CURDATE()) THEN salary ELSE 0 END) AS current_year_total_salary,
    SUM(CASE WHEN YEAR(joining_date) < YEAR(CURDATE()) THEN salary ELSE 0 END) AS previous_years_total_salary
FROM employees;