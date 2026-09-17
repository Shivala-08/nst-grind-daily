SELECT 
    outlet,
    sale_date,
    revenue,
    ROUND(
        AVG(revenue) OVER (
            PARTITION BY outlet 
            ORDER BY sale_date 
            ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
        ), 2
    ) AS rolling_avg_revenue
FROM 
    outlet_sales
ORDER BY 
    outlet, 
    sale_date;