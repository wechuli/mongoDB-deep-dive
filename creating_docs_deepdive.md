- **insertOne()** - `db.collectionName.insertOne({field:"value"})`
- **insertMany()** - `db.collectionName.insertMany[{field:"value"},{field:"value"}]`
- **mongoimport** - `mongoimport -d cars -c carsList --drop --jsonArray`

## Atomicity

MongoDB CRUD Operations are Atomic on the Document Level(including Embedded Documents)