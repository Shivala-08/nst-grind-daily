SELECT 
    origin,
    destination,
    SUM(revenue) AS total_revenue,
    SUM(seats_sold) AS total_seats_sold
FROM 
    Flights
GROUP BY 
    origin, 
    destination;