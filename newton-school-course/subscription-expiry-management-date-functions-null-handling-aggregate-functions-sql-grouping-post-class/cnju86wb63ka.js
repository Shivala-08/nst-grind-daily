SELECT 
    sub_id, 
    plan_name, 
    end_date,
    TO_CHAR(end_date, '"Renew by" DD Mon YYYY') AS renewal_label
FROM subscriptions
WHERE end_date >= DATE_TRUNC('month', DATE '2026-06-15')
  AND end_date < DATE_TRUNC('month', DATE '2026-06-15') + INTERVAL '1 month';