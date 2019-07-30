// Update operations

db.users.find({
  $and: [{ "hobbies.title": "Sports" }, { "hobbies.frequency": { $gte: 3 } }]
});
db.users.find({
  hobbies: { $elemMatch: { title: "Sports", frequency: { $gte: 3 } } }
});

// Update a particular element which matched the query above not the whole document
db.users.updateMany(
  { hobbies: { $elemMatch: { title: "Sports", frequency: { $gte: 3 } } } },
  { $set: { "hobbies.$.highFrequency": true } }
);

// Updating all array elements

db.users.find({ "hobbies.frequency": { $gt: 2 } });

db.users.updateMany({ "hobbies.frequency": { $gt: 2 } }, { $set });

db.users.find({ age: { $gt: 30 } });
db.users.updateMany(
  { age: { $gt: 30 } },
  { $inc: { "hobbies.$[].frequency": -1 } }
);

// Finding and updating specific fields

db.users.find({ "hobbies.frequency": { $gt: 4 } });

db.users.updateMany(
  { "hobbies.frequency": { $gt: 3 } },
  { $set: { "hobbies.$[el].goodFrequency": true } },
  { arrayFilters: [{ "el.frequency": { $gt: 2 } }] }
);

//Adding Elements to Arrays

db.users.updateOne(
  { name: "Maria" },
  { $push: { hobbies: { title: "Sports2", frequency: 2 } } }
);

//Adding multiple items to array

db.users.updateOne(
  { name: "Maria" },
  {
    $push: {
      hobbies: {
        $each: [
          { title: "Good Wine", frequency: 2 },
          { title: "Hiking", frequency: 0.2 }
        ]
      }
    }
  }
);

//Removing Elements from Arrays

db.users.updateOne(
  { name: "Maria" },
  { $pull: { hobbies: { title: "Good Wine" } } }
);

//remove the last(1) document/or first(-1)

db.users.updateOne({ name: "July" }, { $pop: { hobbies: 1 } });

//Understanding $addToSet - this adds unique values only

db.users.updateOne(
  { name: "Maria" },
  { $addToSet: { hobbies: { title: "Sports3", frequency: 2 } } }
);
