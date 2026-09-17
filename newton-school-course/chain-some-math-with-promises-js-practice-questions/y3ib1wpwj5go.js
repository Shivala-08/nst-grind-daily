function double(value) {
  return Promise.resolve(value * 2);
}

function addTen(value) {
  return Promise.resolve(value + 10);
}

function multiplyByThree(value) {
  return Promise.resolve(value * 3);
}

// Chaining the functions as required:
double(5)
  .then(result => {
    return addTen(result);
  })
  .then(result => {
    return multiplyByThree(result);
  })
  .then(finalResult => {
    console.log(finalResult);
  });