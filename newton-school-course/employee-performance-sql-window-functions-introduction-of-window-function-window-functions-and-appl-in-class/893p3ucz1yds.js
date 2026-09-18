SELECT 
    employee_id, 
    employee_name, 
    performance_score, 
    ROW_NUMBER() OVER (ORDER BY performance_score DESC) AS rank_number
FROM 
    EMPLOYEE_PERFORMANCE;