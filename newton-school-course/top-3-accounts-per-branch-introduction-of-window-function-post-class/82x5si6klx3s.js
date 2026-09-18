SELECT 
account_holder,branch,balance,
RANK(balance) OVER (PARTITION BY )