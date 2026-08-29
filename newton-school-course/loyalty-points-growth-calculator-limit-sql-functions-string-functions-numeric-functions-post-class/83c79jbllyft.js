-- Task 1
SELECT 
    member_name, 
    ROUND(base_points * POWER(1 + growth_rate, 3)) AS projected_points
FROM members;

-- Task 2
SELECT 
    member_name, 
    ROUND(base_points * POWER(1 + growth_rate, 3)) AS projected_points,
    ABS(ROUND(base_points * POWER(1 + growth_rate, 3)) - target_pts) AS variance
FROM members
ORDER BY variance DESC;