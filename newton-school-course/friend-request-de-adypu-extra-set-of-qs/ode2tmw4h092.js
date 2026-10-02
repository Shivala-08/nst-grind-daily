SELECT COUNT(*) AS total_approved_requests
FROM request
WHERE (MONTH(date_approved) = 1 OR MONTH(date_approved) = 2)
  AND YEAR(date_sent) = YEAR(date_approved);