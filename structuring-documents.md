# Schemas and Relations: How to Structure Documents

- Understanding Document Schemas and Data types
- Modelling Relations
- Schema Validation

## Why Use Schemas anyway?

Structure helps you manage your data and work with it efficiently.

## Data Types

- Text - no limitation here
- Boolean - true or false
- Number
  - Integer(int32)
  - NumberLong(int64)
  - NumberDecimal
- ObjectId
- ISODate - e.g ISODate("2018-09-09")
- Timestamp - Timestamp(111421532)
- Embedded Document
- Array

MongoDB has a couple of hard limits- most importantly, a single document in a collection(including all embedded documents it might have) must be <= 16mb. Additionally, you may only have 100 levels of embedded documents.

## Modelling
Questions?
- Which data does my App need or generate ? -User information,Product Information, Orders - This defines the fields you'll need (and how they relate)
- Where do I need my Data? - Welcome Page, Products List Page, Orders Page etc - Defines your required collections + field groupings
- Which kind of Data or Information do I want to display - Defines which queries you'll need
- How often do I fetch my data> Defines whether you should optimize for easy fetching
- How often do I write or change my data? Defines whether you should optimize for easy writing.

## Understanding Relations
 - Nested/Embedded Documents
 - References

### One to One Relations
    - Embedded
    - References

### One to Many Relations