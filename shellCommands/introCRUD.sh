# insert a single document
db.flightData.insertOne({"departureAirport": "LHR",
    "arrivalAirport": "TXL",
    "aircraft": "Airbus A320",
    "distance": 950,
    "intercontinental": false})

# insert many

db.flightData.insertMany( [{
    "departureAirport": "MUC",
    "arrivalAirport": "SFO",
    "aircraft": "Airbus A380",
    "distance": 12000,
    "intercontinental": true
  },
  {
    "departureAirport": "LHR",
    "arrivalAirport": "TXL",
    "aircraft": "Airbus A320",
    "distance": 950,
    "intercontinental": false
  }])

  # update One
  db.flightData.updateOne({distance:1200},{$set:{marker:"delete"}})

  #update Many
  db.flightData.updateMany({},{$set:{marker:"toDelete"}})

#   delete Many
db.flightData.deleteMany({marker:"toDelete"})

#insert many
db.flightData.insertMany([
  {
    "departureAirport": "MUC",
    "arrivalAirport": "SFO",
    "aircraft": "Airbus A380",
    "distance": 12000,
    "intercontinental": true
  },
  {
    "departureAirport": "LHR",
    "arrivalAirport": "TXL",
    "aircraft": "Airbus A320",
    "distance": 950,
    "intercontinental": false
  }
]
)

#filtering with find
db.flightData.find({distance:950})
# filtering with greater than

db.flightData.find({distance:{$gt:10000}})

#findOne
db.flightData.findOne({distance:{$gt:100}})
# updateOne
db.flightData.updateOne({_id:ObjectId("5d1613e0cdf24c29a9421d9a")},{$set:{delayed:true}})

# we can use update without using set but it replaces it with the passed in documents
db.flightData.update({_id:ObjectId("5d1613e0cdf24c29a9421d9a")},{delayed:false})


# a more explicit way to completely change a document is to use replaceOne
db.flightData.replaceOne({_id:ObjectId("5d1613e0cdf24c29a9421d9a")},{    "departureAirport": "LHR",
    "arrivalAirport": "TXL",
    "aircraft": "Airbus A320",
    "distance": 950,
    "intercontinental": false})

db.passengers.insertMany([
  {
    "name": "Max Schwarzmueller",
    "age": 29
  },
  {
    "name": "Manu Lorenz",
    "age": 30
  },
  {
    "name": "Chris Hayton",
    "age": 35
  },
  {
    "name": "Sandeep Kumar",
    "age": 28
  },
  {
    "name": "Maria Jones",
    "age": 30
  },
  {
    "name": "Alexandra Maier",
    "age": 27
  },
  {
    "name": "Dr. Phil Evans",
    "age": 47
  },
  {
    "name": "Sandra Brugge",
    "age": 33
  },
  {
    "name": "Elisabeth Mayr",
    "age": 29
  },
  {
    "name": "Frank Cube",
    "age": 41
  },
  {
    "name": "Karandeep Alun",
    "age": 48
  },
  {
    "name": "Michaela Drayer",
    "age": 39
  },
  {
    "name": "Bernd Hoftstadt",
    "age": 22
  },
  {
    "name": "Scott Tolib",
    "age": 44
  },
  {
    "name": "Freddy Melver",
    "age": 41
  },
  {
    "name": "Alexis Bohed",
    "age": 35
  },
  {
    "name": "Melanie Palace",
    "age": 27
  },
  {
    "name": "Armin Glutch",
    "age": 35
  },
  {
    "name": "Klaus Arber",
    "age": 53
  },
  {
    "name": "Albert Twostone",
    "age": 68
  },
  {
    "name": "Gordon Black",
    "age": 38
  }
]
)

# cursor object
db.passengers.find().forEach(passenger=>printjson(passenger))

# projection to filter the fields
db.passengers.find({},{name:1,_id:0})

#embedded fields
db.flightData.updateMany({},{$set:{status:{description:"on-time",lastUpdated:"1 hour ago"}}})

#embedded arrays
db.passengers.updateOne({name:"Albert Twostone"},{$set:{hobbies:["sports","cooking","running"]}})

#accesing structures data

db.passengers.findOne({name:"Albert Twostone"}).hobbies
db.passengers.find({hobbies:"sports"}).pretty()

# accessing nested objects - we can drill inside nested object using the dot notation but the key must be places inside a string
db.flightData.find({"status.description":"on-time"}).pretty()