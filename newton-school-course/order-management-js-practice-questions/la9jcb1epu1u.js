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
  const oldResult = await OldPerson(oldPersonName, oldPersonTime);
  console.log(oldResult);

  const fastestYoung = await Promise.race([
    YoungPerson(person1Name, person1Time),
    YoungPerson(person2Name, person2Time)
  ]);

  console.log(fastestYoung);
  return fastestYoung;
}