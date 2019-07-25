//cretae a new collection("sports") and upsert two new documents into it with these fields:"title","requiresTeam"

db.sports.updateOne(
  { title: "basketball" },
  { $set: { requiresTeam: false } },
  { upsert: true }
);

db.sports.updateOne(
  {},
  { $set: { title: "Tennis", requiresTeam: true } },
  { upsert: true }
);

db.sports.updateOne({ title: "basketball" }, { $set: { requiresTeam: true } });

//update all documents which do require a team by adding a new field with the minimum amount of players required

db.sports.updateOne({ title: "basketball" }, { $set: { minimumPlayers: 6 } });
db.sports.updateOne({ title: "Football" }, { $set: { minimumPlayers: 11 } });

//update all documents that require a team by increasing the number of required players by 10

db.sports.updateMany({ requiresTeam: true }, { $inc: { minimumPlayers: 10 } });
