const createUserProfile = (id, name, age, passion, gender) => {
  const profile = {};

  if (id) profile.id = id;
  if (name) profile.name = name;
  if (age) profile.age = age;
  if (passion) profile.passion = passion;
  if (gender) profile.gender = gender;

  return profile;
};