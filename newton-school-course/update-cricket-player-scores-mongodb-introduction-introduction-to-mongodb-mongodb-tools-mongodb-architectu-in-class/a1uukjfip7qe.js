db.players.updateMany(
  { score: { $gt: 100 } },
  { $set: { score: 100 } }
);

db.players.find(
  {},
  { _id: 0, name: 1, team: 1, score: 1 }
).sort({ score: -1 }).limit(5);