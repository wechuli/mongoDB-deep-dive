//Modifying documents with $set

db.users.updateOne(
  { _id: ObjectId("5d359acdf4f5684b42f0994d") },
  {
    $set: {
      hobbies: [
        { title: "Sports", frequency: 5 },
        { title: "Film", frequency: 2 }
      ]
    }
  }
);

// Update many documents
db.users.updateMany(
  { "hobbies.title": "Sports" },
  { $set: { isSporty: true } }
);

db.users.updateMany(
  { "hobbies.title": { $not: { $eq: "Sports" } } },
  { $set: { isSporty: false } }
);
