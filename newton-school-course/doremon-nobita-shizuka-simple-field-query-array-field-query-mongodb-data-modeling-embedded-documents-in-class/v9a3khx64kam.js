db.characters.insertMany([
  { name: "Doraemon", type: "Robot Cat" },
  { name: "Nobita", type: "Human" },
  { name: "Shizuka", type: "Human" }
]);
db.characters.find({ type: "Human" });
db.characters.countDocuments({ type: "Robot Cat" });