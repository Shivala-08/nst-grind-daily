db.students.updateOne(
  {
    name: "Hermione Granger",
    "spells.spell_name": "Alohomora"
  },
  {
    $set: {
      "spells.$.level": 5
    }
  }
);