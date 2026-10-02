SELECT 
    QUARTER(joining_date) AS joining_quarter, 
    COUNT(*) AS total_joinees
FROM employees
GROUP BY QUARTER(joining_date)
ORDER BY joining_quarter;