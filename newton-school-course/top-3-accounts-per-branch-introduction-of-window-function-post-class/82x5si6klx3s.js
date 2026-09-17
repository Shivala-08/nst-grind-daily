SELECT 
    account_holder, 
    branch, 
    balance, 
    ROW_NUMBER() OVER (PARTITION BY branch ORDER BY balance DESC) AS rn
FROM accounts
ORDER BY branch ASC, rn ASC;