const GRAVITY = 9.8;

const circumference = (radius) => {
    return 2 * 3.14 * radius;
};

const area = (radius) => {
    return 3.14 * radius * radius;
};

// Write your code here...
module.exports = {
  GRAVITY,
  circumference,
  area
};