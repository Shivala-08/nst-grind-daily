SELECT 
    *,
    TIMESTAMPDIFF(YEAR, joining_date, CURRENT_DATE()) AS experience_years,
    CASE 
        WHEN TIMESTAMPDIFF(YEAR, joining_date, CURRENT_DATE()) > 2 THEN 'Senior'
        ELSE 'Junior'
    END AS experience_level
FROM employees;