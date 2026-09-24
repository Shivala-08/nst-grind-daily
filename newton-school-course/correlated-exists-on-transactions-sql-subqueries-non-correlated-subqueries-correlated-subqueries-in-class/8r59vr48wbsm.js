SELECT account_holder, branch, balance
FROM accounts a
WHERE account_status = 'Active'
  AND EXISTS (
      SELECT 1 
      FROM transactions t
      WHERE t.account_id = a.account_id
        AND t.txn_amount > (
            SELECT AVG(txn_amount) 
            FROM transactions 
            WHERE account_id = a.account_id
        )
  );