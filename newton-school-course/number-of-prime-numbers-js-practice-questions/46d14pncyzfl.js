// start, end : variables are already defined, you have to directly use them

function countPrimes(start, end) {
  let count = 0;

  for (let num = start; num <= end; num++) {
    if (num <= 1) continue;
    let isPrime = true;
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    
    if (isPrime) {
      count++;
    }
  }

  console.log(count);
}

countPrimes(start, end);