const express = require("express")
require("dotenv").config()
const app = express()
const PORT = process.env.PORT || 5000
const schema = require("./graphql/schema/index")
const graphqlResolvers = require("./graphql/resolver/index")
const { graphqlHTTP } = require('express-graphql');
const connectDB = require("./config/db")
const cors  = require("cors")

app.use(express.json())

connectDB()
app.use(cors())

app.use("/graphql", graphqlHTTP({
    schema,
    rootValue: graphqlResolvers,
    graphiql: process.env.NODE_ENV  === "development"
}))


app.listen(PORT, () =>
{
    console.log(`Server running on port ${PORT}`)
})


