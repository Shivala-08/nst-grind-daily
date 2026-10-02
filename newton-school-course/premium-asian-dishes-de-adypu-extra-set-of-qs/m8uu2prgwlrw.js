SELECT 
    UPPER(COALESCE(f_name, 'Unnamed Dish')) AS dish_name,
    f_cost AS dish_cost,
    f_type AS dish_type
FROM Food
WHERE f_cost > (SELECT AVG(f_cost) FROM Food)
  AND f_type LIKE '%Asian%';