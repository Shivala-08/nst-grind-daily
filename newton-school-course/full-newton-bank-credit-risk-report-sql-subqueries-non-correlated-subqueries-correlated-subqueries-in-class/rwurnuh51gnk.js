SELECT 
    account_holder, 
    branch, 
    account_type, 
    balance,
    ROUND((SELECT AVG(balance) FROM accounts WHERE branch = a.branch), 2) AS branch_avg,
    ROUND(balance - (SELECT AVG(balance) FROM accounts WHERE branch = a.branch), 2) AS balance_diff,
    CASE 
        WHEN balance > 2 * (SELECT AVG(balance) FROM accounts WHERE branch = a.branch) THEN 'High Value'
        ELSE 'Above Average'
    END AS risk_flag
FROM accounts a
WHERE account_status = 'Active'
  AND balance > (
      SELECT AVG(balance)
      FROM accounts
      WHERE branch = a.branch
  )
  AND EXISTS (
      SELECT 1 
      FROM transactions t 
      WHERE t.account_id = a.account_id
  );