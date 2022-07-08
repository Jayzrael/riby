const mongoose = require("mongoose")

// type Job{
//     id: ID!
//     Role: String!
//     Description: String!
// }

const JobSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true
    },
    description: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("Job", JobSchema)