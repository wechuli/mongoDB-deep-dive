# references

db.patients.insertOne({name:"Max",age:26,"diseaseSummary":"summary1"})

db.diseaseSummary.insertOne({_id:"summary1",diseases:["cold","pneumonia","tuberculosis"]})
# fetching documents with their references
db.patients.findOne().diseaseSummary

var dsid = db.patients.findOne().diseaseSummary

db.diseaseSummary.findOne({_id:dsid})

# Using embedded docs

db.patients.insertOne({name:"Paul",age:26,diseaseSummary:{diseases:["cold","Malaria"]}})

db.persons.insertOne({name:"Paul",car:{model:"BMW",price:40000}})

db.persons.insertOne({name:"Paul",age:26,salary:3000})
db.cars.insertOne({model:"BMW",price:40000,owner:ObjectId("5d1b42e8b17b8b7474a46c75")})

## Modelling One to Many relations

# references
db.questionThreads.insertOne({creator:"Wechuli",question:"How now?",answers:["q1a",'q1b','q2a']})
db.answers.insertMany([{_id:"q1a",text:"It works like that"},{_id:"q1b",text:"Not sure that's correct"}])

#embedded
db.questionThreads.insertOne({creator:"Paul",question:"How does it all works",answers:[{text:"It works like that"},{text:"Thanks"}]})

db.questionThreads.find().pretty()


db.cities.insertOne({name:"Nairobi",population:3000000})
db.cities.insertOne({name:"Naivasha",population:200000,coordinates:{lat:-1.3855,lon:36.8565}})

db.cities.updateOne({name:"Nairobi"},{$set:{coordinates:{lat:-1.000,lon:37.8565}}})

db.citizens.insertMany([{name:"Paul",city:ObjectId("5d2185b0c062f7de40dddb92")},{name:"June",city:ObjectId("5d2185b0c062f7de40dddb92")},{name:"Francis",city:ObjectId("5d2185b0c062f7de40dddb92")}])


ObjectId("5d218625c062f7de40dddb93")


db.citizens.insertMany([{name:"Mercy",city:ObjectId("5d218625c062f7de40dddb93")},{name:"Caroline",city:ObjectId("5d218625c062f7de40dddb93")}])

## Many to Many
db.products.insertOne({title:"A book",price:12.99})
db.customers.insertOne({name:"Paul Wechuli",age:26})
db.orders.insertOne({productId:ObjectId("5d1c958162af087440bab764"),customerId:ObjectId("5d1c95b262af087440bab765")})


db.customers.updateOne({},{$set:{orders:[{productId:ObjectId("5d1355a6a112f4d2dbcd572d"),quantity:2},{productId:ObjectId("5d135679a112f4d2dbcd572f"),quantity:200}]}})

db.books.insertOne({name:"A book",authors:[{name:"Paul",age:26},{name:"Jess",age:24}]})
db.authors.insertMany([{name:"Paul",age:26,address:123},{name:"Jess",age:24,address:555}])

## Using Lookup

db.citizens.aggregate([
    {$lookup:{from:"cities",localField:"city",foreignField:"_id",as:"cityDetails"}}
])