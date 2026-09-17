function findTax(salary) {
  if (salary <= 0) {
    return "Salary not valid";
  }

  // Using switch(true) to evaluate range conditions
  switch (true) {
    case (salary <= 500000):
      return 0;
      
    case (salary > 500000 && salary <= 1000000):
      return salary * 0.10;
      
    case (salary > 1000000 && salary <= 1500000):
      return salary * 0.20;
      
    case (salary > 1500000):
      return salary * 0.30;
      
    default:
      return 0;
  }
}