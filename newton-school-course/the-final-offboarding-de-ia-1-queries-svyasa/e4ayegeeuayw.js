-- ============================================
-- INSPECT THE DATA
-- ============================================

-- SELECT * FROM departments;
SELECT * FROM employees;
SELECT * FROM employee_sessions;
SELECT * FROM access_tokens;
SELECT * FROM projects;
SELECT * FROM project_assignments;
SELECT * FROM devices;
SELECT * FROM employee_devices;
SELECT * FROM leave_requests;


-- ============================================
-- YOUR SOLUTION
-- ============================================

BEGIN;

-- Write your SQL queries below this line.
Update employees
set is_active='f'
where employee_id=1;


delete from access_tokens where employee_id=1;

delete from devices where device_id in (SELECT device_id from employee_devices where employee_id=1);


-- Write your SQL queries above this line.

COMMIT;