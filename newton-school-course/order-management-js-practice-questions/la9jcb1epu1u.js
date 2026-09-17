const OldPerson = (name, time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(name);
    }, time);
  });
};

const YoungPerson = (name, time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(name);
    }, time);
  });
};

async function execution(oldPersonName, oldPersonTime, person1Name, person1Time, person2Name, person2Time) {
  // 1. Execute the old person's order first and wait for it to complete
  const oldResult = await OldPerson(oldPersonName, oldPersonTime);
  console.log(oldResult);

  // 2. Take the orders of the two young persons concurrently using Promise.race() 
  // to find out which one finishes first (takes less time)
  const fastestYoung = await Promise.race([
    YoungPerson(person1Name, person1Time),
    YoungPerson(person2Name, person2Time)
  ]);

  console.log(fastestYoung);
  return fastestYoung;
}