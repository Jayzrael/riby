const mongoose = require("mongoose")

// type Job{
//     id: ID!
//     Role: String!
//     Description: String!
// }

const JobSchema = new mongoose.Schema({
    Role: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("Job", JobSchema)