# Read Operations

## Methods,Filters & Operators

        db.{collectionName}.find({field:value})

find accepts a filter

We can also use an operator to filter through our data

        db.{collectionName}.find({age:{$gt:30}})

The `$gt` is an operator which is a reserved name for more filtering.

## Operators - Read
- Query Selectors - allow for filtering
- Projection Operators - allow us to change the data we get back

## How operators Impact our Data

- **Query Operator** - Locate Data - does not change it
- **Projection Operator** - Modify data presentation - does not change the data
- **Update Operator** - Modify + add additional data - modifies the data

### Query Selectors
- Comparison
- Evaluation
- Logical
- Array
- Element
- Comments
- Geospatial

### Projection
- $
- $elemMatch
- $meta
- $slice