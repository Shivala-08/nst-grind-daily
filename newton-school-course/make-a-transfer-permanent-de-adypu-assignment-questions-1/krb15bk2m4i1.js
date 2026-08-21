BEGIN;
UPDATE accounts SET balance = balance - 500 WHERE acc_id = 1;
UPDATE accounts SET balance = balance - 500 WHERE acc_id = 2;