db.vehicles.updateMany(
  { company: "Toyota" },
  { $set: { isAvailable: true } }
);

db.vehicles.find({ company: "Toyota" });