WITH eligible_reps AS (
    SELECT
        rep_id,
        rep_name,
        city,
        staffing_type,
        quarter,
        quarterly_sales,
        RANK() OVER (
            PARTITION BY city, quarter
            ORDER BY quarterly_sales DESC
        ) AS city_rank
    FROM sales_reps
    WHERE (staffing_type = 'Full-Time' AND quarterly_sales >= 50000)
       OR (staffing_type = 'Part-Time' AND quarterly_sales >= 20000)
)
SELECT
    rep_name,
    city,
    staffing_type,
    quarter,
    quarterly_sales,
    city_rank,
    ROUND(
        AVG(quarterly_sales) OVER (
            PARTITION BY city, quarter
            ORDER BY quarterly_sales DESC, rep_id ASC
            ROWS BETWEEN 2 PRECEDING AND 1 PRECEDING
        ),
        2
    ) AS rolling_avg_top2
FROM eligible_reps
ORDER BY
    city ASC,
    quarter ASC,
    city_rank ASC,
    rep_id ASC;