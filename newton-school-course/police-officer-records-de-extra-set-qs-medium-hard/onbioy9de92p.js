SELECT 
    po.officer_id AS officer_id,
    po.officer_name AS officer_name,
    COALESCE(po.email, 'No Email') AS employee_email,
    COALESCE(ps.station_name, 'Unassigned') AS station_name,
    po.designation AS designation,
    po.salary AS salary
FROM Police_Officers po
LEFT JOIN Police_Stations ps ON po.station_id = ps.station_id
WHERE po.salary > 55000
ORDER BY po.salary DESC, station_name ASC;