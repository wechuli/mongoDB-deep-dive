# Indexes

A database index is a data structure that improves the speed of data retrieval operations on a database table at the cost of additional writes and storage space to maintain the index data structure. Indexes are used to quickly locate data without having to search every row in a database table every time a database table is accessed. Indexes can be created using one or more columns of a database table, providing the basis for rapid random lookups and efficient access of ordered records.

An index is a copy of selected columns of data from a table that can be searched very efficiently that also includes a low-level disk block address or direct link to the complete row of data it was copied from.

## Adding a Single Field Index

```JavaScript
db.contacts.createIndex({ "dob.age": 1 });

```

What does `createIndex()` do in detail?

Whilst we can't really see the index, you can think of the index as a simple list of values + pointers to the original document.

Something like this (for the "age" field):

(29, "address in memory/ collection a1")

(30, "address in memory/ collection a2")

(33, "address in memory/ collection a3")

The documents in the collection would be at the "addresses" a1, a2 and a3. The order does not have to match the order in the index (and most likely, it indeed won't).

The important thing is that the index items are ordered(ascending or descending depending on how you created the index). createIndex({age: 1}) creates an index with ascending sorting, createIndex({age: -1}) creates one with descending sorting.

MongoDB is now able to quickly find a fitting document when you filter for its age as it has a sorted list. Sorted lists are way quicker to search because you can skip entire ranges(and you don't have to look at every single document)

Additionally, sorting(via sort(...)) will also be sped up because you already have a sorted list. Of course that is only true when sorting for the age.


## Index Restrictions

If you have a query that returns a majority of your documents, the index might actually be slower as you have an extra step of going through the index first before querying the collection. If your query returns only a few docs, an index will help you with speed here.

## Sorting

Idexes can be used for sorting. When sorting documents and have a lot of docs in the query, instead of storing the operation and results in memory, MongoDB could us the already sorted index to return the documents.

## Default Indexes
- _id is the default index

### Unique Indexes
Unique indexes can help you ensure data consistency for fields that you need values to be unique.

## Understanding Partial Filters

You can add a partial index for values you are going to regurlaly look at.