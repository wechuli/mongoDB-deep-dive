# MongoDB

MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.

## MongoDB Ecosystem

- Self-Managed/Enterprise
  - CloudManager/OpsManage
- Atlas(Cloud)
- Mobile
- Compass
- BI Connectors
- MongoDB Charts
- MongoDB Stitch - Serveless Functions built for MongoDB, Serveless Query API, Database Triggers, Real-Time Sync

## Mongo-Shell Commands

- _show dbs_ - show existing databases
- _use {dbName}_ - use the specified db, if not available, it will be created
- _db.{collection}.insertOne({})_ insert a document into a collection
- _db.{collection}.find()_ - get all documents
- _db.{collection}.find().pretty()_ - output in a pretty way

## Mongo Shell Vs Drivers

pass

- Basics of Collections and documents
- Basic Data types
- Performing CRUD Operations

Databases and collections are created explicitly when storing data.

BSON - Binary JSON - mongo uses BSON for storing.BSON is more efficient than JSON and includes extra types

## Basic CRUD Operations

### Create

- insertOne(data,options)
- insertMany(data,options)

### Read

- find(filter,options)
- findOne(filter,options)

### Update

- updateOne(filter,data,options)
- updateMany(filter,data,options)
- replaceOne(filter,data,options)

### Delete

- deleteOne(filter,options)
- deleteMany(filter,options)


find() gives us a cursor Object which is an object with a lot of metadata that enables us to cycle through the result. It does not return all the results from the db

- db.collections.toArray() - 

### Projection