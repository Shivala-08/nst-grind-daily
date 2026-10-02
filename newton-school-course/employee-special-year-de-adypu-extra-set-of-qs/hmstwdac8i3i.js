-- Write your code here
SELECT 
    YEAR(JoiningDate) AS Special_Year,
    SUM(CASE WHEN DAY(JoiningDate) % 2 = 0 THEN 1 ELSE 0 END) AS EvenDays
FROM 
    Employee
GROUP BY 
    YEAR(JoiningDate)
HAVING 
    MAX(MONTH(JoiningDate) % 2 <> 0) = 0
ORDER BY 
    Special_Year ASC;