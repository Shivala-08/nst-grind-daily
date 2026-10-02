SELECT 
    o.officer_id,
    o.officer_name,
    COALESCE(o.email, 'No Email') AS email,
    COALESCE(s.station_name, 'Unassigned') AS station_name,
    o.designation,
    o.salary
FROM Police_Officers o
LEFT JOIN Police_Stations s ON o.station_id = s.station_id
WHERE o.salary > 55000
ORDER BY o.salary DESC, s.station_name ASC;