db.characters.insertOne({
  name: "Doraemon",
  type: "Robot Cat",
  gadgets: [
    { gadget_name: "Take-copter", level: 5 },
    { gadget_name: "Anywhere Door", level: 4 }
  ]
});

db.characters.find({
  "gadgets.gadget_name": "Anywhere Door"
});

db.characters.updateMany(
  { "gadgets.gadget_name": "Take-copter" },
  { $inc: { "gadgets.$.level": 1 } }
);