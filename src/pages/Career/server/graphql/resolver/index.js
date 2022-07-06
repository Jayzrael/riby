const Job = require("../../model/Job")
const Applicant = require("../../model/Applicant")

// type RootQuery{
//     getJob: Job!
//     getAllJobs: [Job!]!
//     getApplicant(id : ID!) : Applicant!
//     getAllApplicants: [Applicant!]!

// }
// type RootMutation{
//     postJob(jobInput: JobInput): Job!
//     apply(input : ApplicantDetails): Applicant!
// }

// input JobInput{
//     role: String!
//     description: String!
// }

// input ApplicantDetails{
//     name: String!
//     email: String!
//     phone: String!
//     mimetype: String!
//     size: Int!
// }

module.exports = {
    //Job Resolvers
    //getJob
    getJob: async (args) =>
    {
        const job = await Job.findById(args.id)

        return job
    },
    //getALlJob
    getAllJobs: async () =>
    {
        const allJob = await Job.find()
        return allJob
    },
    //postJob
    postJob: async (args) =>
    {
        const {role, description} = args.jobInput
        const newJob = new Job({ role, description })
        return newJob._doc
    },

    //Applicant Resolvers
    //getApplicant
    getApplicant: async (args) =>
    {
        const applicant = await Applicant.findById(args.id)
        return applicant
    },
    //getAllApplicants
    getAllApplicants: async (args) =>
    {
        const allApplicants = await Applicant.find()

        return allApplicants
    },
    //apply
    apply: async (args) =>
    {
        const { name, email, phone, mimetype, size } = args.ApplicantDetails
        const newApplication = new Applicant.$where({
            name,
            email,
            phone,
            mimetype,
            size
        })
        return newApplication
    }
}
