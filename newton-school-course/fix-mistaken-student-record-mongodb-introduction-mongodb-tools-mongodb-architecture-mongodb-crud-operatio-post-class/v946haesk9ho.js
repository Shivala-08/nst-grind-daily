db.students.updateOne(
  {
    name: "Riya",
    year: 3,
    department: "Computer Science"
  },
  {
    $set: { year: 4 }
  }
);