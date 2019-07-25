// Using upsert()

// the below document will not be inserted in the DB, since the query was not matched
db.users.updateOne(
  { name: "Maria" },
  {
    $set: {
      age: 25,
      hobbies: [
        { title: "dancing", frequency: 3 },
        { title: "rugby_fan", frequency: 1 }
      ],
      isSporty: false
    }
  }
);

//Maybe we want to add or insert if not found
db.users.updateOne(
  { name: "Maria" },
  {
    $set: {
      age: 25,
      hobbies: [
        { title: "dancing", frequency: 3 },
        { title: "rugby_fan", frequency: 1 }
      ],
      isSporty: false
    }
  },
  { upsert: true }
);
