db.persons.insertOne({
  name: "Wechuli",
  age: 26,
  hobbies: ["programming", "football", "music"]
});

db.persons.insertMany([{
    name: "Anna",
    age: 29,
    hobbies: ["Rowing", "Yoga", "music"]
  },
  {
    name: "Lorenz",
    age: 50
  },
  {
    name: "Maria",
    age: 25,
    hobbies: ["Hockey", "Trips", "music"]
  }
]);


// We can create our own unique id's _id
db.hobbies.insertMany([{
    _id: "Yoga",
    name: "Yoga"
  },
  {
    _id: "Cooking",
    name: "Cooking"
  },
  {
    _id: "Hiking",
    name: "Hiking"
  }

])

//Ordered insert- every element you insert is processed stand alone but if one fails, it cancels the entire operation but it does not roll back. We can change this behaviour


//the ordered set to false which confirms all documents before inserting, it does not throw an error if an insert failed and does not roll back in case that happens
db.hobbies.insertMany([{
    _id: "Yoga",
    name: "Yoga"
  },
  {
    _id: "Cooking",
    name: "Cooking"
  },
  {
    _id: "Hiking",
    name: "Hiking"
  }

], {
  ordered: false
})

// 'writeConcern' - Journal("Todos")
// {
//   w: 1,
//   j: undefined
// } ;
// {
//   w: 1,
//   j: true
// } //enable journal
// {
//   w: 1,
//   wtimeout: 200,
//   j: true
// }

//'writeConcern' practise - journal set to false

db.citizens.insertOne({
  name: "Wechuli",
  city: ObjectId("5d2185b0c062f7de40dddb92"),
  age: 27
}, {
  writeConcern: {
    w: 1,
    j: false
  }
})

//journal set to true


db.citizens.insertOne({
  name: "Nicole",
  city: ObjectId("5d2185b0c062f7de40dddb92"),
  age: 27
}, {
  writeConcern: {
    w: 1,
    j: true
  }
})

//timout
db.citizens.insertOne({
  name: "Nicole",
  city: ObjectId("5d2185b0c062f7de40dddb92"),
  age: 27
}, {
  writeConcern: {
    w: 1,
    j: true,
    wtimeout: 200
  }
})