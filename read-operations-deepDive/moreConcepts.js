db.users.insertMany([
  {
    name: "Paul",
    hobbies: [
      { title: "Sports", frequency: 3 },
      { title: "Programming", frequency: 999 }
    ],
    phone: 123456856
  },
  {
    name: "Valentine",
    hobbies: [
      { title: "Movies", frequency: 6 },
      { title: "Cooking", frequency: 5 }
    ],
    phone: "01234566",
    age: 25
  }
]);

db.users.insertOne({
  name: "Anna",
  hobbies: [
    { title: "Movies", frequency: 6 },
    { title: "Cooking", frequency: 5 }
  ],
  phone: "012345fff66",
  age: null
});

//Find all persons who have an age field

db.users.find({ age: { $exists: true } }).pretty();

//Find all persons who have an age field and the field is not equal to null

db.users.find({ age: { $exists: true, $ne: null } }).pretty();

// Find a particula field with a specific type

db.users.find({ phone: { $type: "number" } }).pretty();

//You can specify multiple types

db.users.find({ phone: { $type: ["double", "string"] } });
