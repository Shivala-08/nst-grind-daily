db.students.updateMany({}, { $inc: { age: 1 } });
db.students.find();