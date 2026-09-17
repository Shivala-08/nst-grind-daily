function manageEmployeeSalary(employees, employeeId, salaryToCheck) {
  // Feature 1: Find Employee by ID
  const employee = employees.find(emp => emp.id === employeeId);
  
  if (employee) {
    console.log("Employee found");
  } else {
    console.log("Employee not found");
  }

  // Note: The problem description cuts off before explaining Feature 2 (which likely uses salaryToCheck). 
  // If the tests fail and expect a second line of output for the salary, you can add something like this:
  // const salaryExists = employees.some(emp => emp.salary === salaryToCheck);
  // console.log(salaryExists ? "Salary found" : "Salary not found");
}