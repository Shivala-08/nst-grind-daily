// 1. Delete all employees whose salary is less than 40,000
db.employees.deleteMany({ salary: { $lt: 40000 } });

// 2. Increase the salary of all remaining employees by 5,000
db.employees.updateMany({}, { $inc: { salary: 5000 } });