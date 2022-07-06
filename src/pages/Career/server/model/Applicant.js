const mongoose = require("mongoose")

// type Applicant{
//     id: ID!
//     name: String!
//     Email: String!
//     phone: String!
//     mimetype: String!
//     size: Int!
// }

const ApplicantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("Applicant", ApplicantSchema)