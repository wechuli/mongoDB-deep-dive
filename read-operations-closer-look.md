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

- \$
- \$elemMatch
- \$meta
- \$slice

Comparison Operators

\$eq Matches values that are equal to a specified value.

// $gt	Matches values that are greater than a specified value.
// $gte Matches values that are greater than or equal to a specified value.
// $in	Matches any of the values specified in an array.
// $lt Matches values that are less than a specified value.
// $lte	Matches values that are less than or equal to a specified value.
// $ne Matches all values that are not equal to a specified value.
// \$nin Matches none of the values specified in an array.

Logical Operators

//$and - Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.
//$not - Inverts the effect of a query expression and returns documents that do not match the query expression.
//$nor - Joins query clauses with a logical NOR returns all documents that fail to match both clauses.
//$or - Joins query clauses with a logical OR returns all documents that match the conditions of either clause.

Element Operators

- \$exists - Matches documents that have the specified field.
- \$type - Selects documents if a field is of the specified type.

Evaluation Operators

- \$expr - Allows use of aggregation expressions within the query language
- \$jsonSchema - Validate documents against the given JSON Schema
- \$mod - Perdorms a modulo operation on the value of a field and selects documents with a specified result
- \$regex - Selects documents where values match a specified regular expression
- \$text - Performs text search
- \$where - Matched documents that satisfy a JavaScript expression

## Array

- \$all - Matches arrays that contain all elements specified in the query
- $elemMatch - Selects documents if element in the array field matches all the specified $elemMatch
- \$size - Selects documents if the array field is a specific value
