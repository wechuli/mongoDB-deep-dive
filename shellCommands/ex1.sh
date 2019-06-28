# insert 3 patients records with at least 1 history entry per patient
db.patients.insertMany([
  {
    "firstname": "Paul",
    "lastName": "Wechuli",
    "age": 26,
    "history": [
      { "disease": "cold", "treatment": "tangawizi" },
      { "disease": "headache", "treatment": "panadol" }
    ]
  },
  {
    "firstname": "June",
    "lastName": "Mu",
    "age": 23,
    "history": [{ "disease": "cold", "treatment": "paracetamol" }]
  },
  {
    "firstname": "Nicole",
    "lastName": "Nafula",
    "age": 38,
    "history": [{ "disease": "headache", "treatment": "panadol" }]
  }
]
)

# update patient data of 1 patient with new age, name and history entry

db.patients.updateOne({firstname:"Nicole"},{$set:{lastName:"Nanzai",age:19,history:[{ "disease": "headache2", "treatment": "panadol2" }]}})

#find all patients older than 22
db.patients.find({age:{$gt:22}}).pretty()

# Delete all patients who go a cold as disease

db.patients.deleteMany({"history.disease":"cold"})