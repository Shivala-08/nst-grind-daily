SELECT 
    UPPER(full_name) AS formatted_name,
    UPPER(house) || EXTRACT(YEAR FROM enrollment_date)::TEXT AS participant_code
FROM 
    hogwarts_students
WHERE 
    EXTRACT(YEAR FROM enrollment_date) = 2024
    AND email LIKE '%@hogwarts.edu'
ORDER BY 
    formatted_name ASC;