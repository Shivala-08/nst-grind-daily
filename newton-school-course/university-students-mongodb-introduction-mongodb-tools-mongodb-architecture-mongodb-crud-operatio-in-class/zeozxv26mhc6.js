db.students.insertMany([
  {
    "name": "Alice",
    "age": 22,
    "department": "Computer Science"
  },
  {
    "name": "Bob",
    "age": 20,
    "department": "Mechanical Engineering"
  }
]);

db.students.find({ age: { $gt: 21 } });