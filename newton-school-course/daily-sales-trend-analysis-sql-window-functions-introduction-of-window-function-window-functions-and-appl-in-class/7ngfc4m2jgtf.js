SELECT 
    sale_date,
    units_sold,
    ROUND(AVG(units_sold) OVER (
        ORDER BY sale_date 
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    ), 1) AS moving_avg_3d,
    SUM(units_sold) OVER (
        ORDER BY sale_date 
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS running_total,
    units_sold - LAG(units_sold, 1) OVER (
        ORDER BY sale_date
    ) AS change_vs_prev_day,
    ROUND(units_sold - AVG(units_sold) OVER (
        ORDER BY sale_date 
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    ), 1) AS variance_vs_moving_avg
FROM 
    daily_sales
ORDER BY 
    sale_date ASC;