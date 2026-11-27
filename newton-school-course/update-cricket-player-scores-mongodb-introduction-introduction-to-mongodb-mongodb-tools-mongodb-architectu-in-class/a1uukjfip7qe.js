db.players.updateMany(
  { score: { $gt: 100 } },
  { $set: { score: 100 } }
)