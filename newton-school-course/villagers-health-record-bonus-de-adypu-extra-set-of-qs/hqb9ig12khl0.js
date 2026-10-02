SELECT 
    villager_name, 
    district, 
    age, 
    ROUND(AVG(health_score), 2) AS average_score,
    CASE 
        WHEN AVG(health_score) >= 85 AND age <= 50 THEN 'Healthy'
        WHEN AVG(health_score) BETWEEN 60 AND 84 AND age BETWEEN 51 AND 65 THEN 'Moderate'
        ELSE 'Critical'
    END AS health_status
FROM Villager_Checkups
WHERE checkup_date >= DATE_SUB((SELECT MAX(checkup_date) FROM Villager_Checkups), INTERVAL 6 MONTH)
  AND (district LIKE 'B%' OR district LIKE 'R%')
GROUP BY villager_id, villager_name, district, age
HAVING COUNT(checkup_id) > 1;