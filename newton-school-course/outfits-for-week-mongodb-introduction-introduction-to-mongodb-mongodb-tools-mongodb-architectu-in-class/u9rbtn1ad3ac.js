db.weekly_outfits.insertOne({
  day: "Tuesday",
  attire: "Kurta Pajama",
  footwear: "Kolhapuri sandals",
  special_about_today: "traditional day"
});

db.weekly_outfits.updateOne(
  { day: "Tuesday" },
  { $set: { accessories: "Watch" } }
);

db.weekly_outfits.find();