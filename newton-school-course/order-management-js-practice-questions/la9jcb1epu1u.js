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

const execution = async (
  oldPersonName,
  oldPersonTime,
  person1Name,
  person1Time,
  person2Name,
  person2Time
) => {
  // 1. Wait exclusively for the old person's order
  const oldResult = await OldPerson(oldPersonName, oldPersonTime);
  console.log(oldResult);

  // 2. Start both young persons' orders concurrently and log each as it finishes
  const young1 = YoungPerson(person1Name, person1Time).then((res) => {
    console.log(res);
    return res;
  });

  const young2 = YoungPerson(person2Name, person2Time).then((res) => {
    console.log(res);
    return res;
  });

  await Promise.all([young1, young2]);
};