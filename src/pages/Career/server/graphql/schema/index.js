const { buildSchema } = require("graphql")

module.exports = buildSchema(`

    type Job{
        id: ID!
        role: String!
        description: String!
    }
    type Applicant{
        id: ID!
        name: String!
        email: String!
        phone: String!
        mimetype: String!
        size: Int!
    }
    input JobInput{
        role: String!
        description: String!
    }
    input ApplicantDetails{
        name: String!
        email: String!
        phone: String!
        mimetype: String!
        size: Int!
    }


    type RootQuery{
        getJob(id: ID): Job!
        getAllJobs: [Job!]!
        getApplicant(id : ID!) : Applicant!
        getAllApplicants: [Applicant!]!

    }
    type RootMutation{
        postJob(jobInput: JobInput): Job!
        apply(input : ApplicantDetails): Applicant!
    }

    schema{
        query: RootQuery
        mutation: RootMutation
    }
`)