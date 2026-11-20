function checkMarriageEligibility(age, gender) {
  return new Promise((resolve, reject) => {
    const isEligible =
      (gender === "male" && age >= 21) ||
      (gender === "female" && age >= 18);

    if (isEligible) {
      resolve("You are eligible for marriage in India.");
    } else {
      reject("You are not eligible for marriage in India.");
    }
  });
}

function mainFunction(age, gender) {
  // call the checkMarriageEligibility here
  checkMarriageEligibility(age, gender)
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    });
}

// write your code here