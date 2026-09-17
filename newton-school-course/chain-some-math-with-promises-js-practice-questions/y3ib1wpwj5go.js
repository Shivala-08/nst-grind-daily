function double(value) {
  return Promise.resolve(value * 2);
}

function addTen(value) {
  return Promise.resolve(value + 10);
}

function multiplyByThree(value) {
  return Promise.resolve(value * 3);
}
double()