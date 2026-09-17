SELECT 
    account_id,
    balance_date,
    closing_balance,
    ROUND(
        AVG(closing_balance) OVER (
            PARTITION BY account_id
            ORDER BY balance_date
            ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
        ), 2
    ) AS moving_avg_balance
FROM 
    ACCOUNT_BALANCE_HISTORY
ORDER BY 
    account_id, 
    balance_date;