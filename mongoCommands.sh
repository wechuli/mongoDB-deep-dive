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