db.persons.insertOne({
  name: "Wechuli",
  age: 26,
  hobbies: ["programming", "football", "music"]
});

db.persons.insertMany([
  { name: "Anna", age: 29, hobbies: ["Rowing", "Yoga", "music"] },
  { name: "Lorenz", age: 50 },
  { name: "Maria", age: 25, hobbies: ["Hockey", "Trips", "music"] }
]);
