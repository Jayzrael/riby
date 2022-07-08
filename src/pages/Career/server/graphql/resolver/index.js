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
        await newJob.save()
        return newJob
    },

    //Applicant Resolvers
    //getApplicant
    getApplicant: async (args) =>
    {
        const applicant = await Applicant.findById(args.id)
        await applicant.save()
        return applicant
    },
    //getAllApplicants
    getAllApplicants: async () =>
    {
        const allApplicants = await Applicant.find()

        return allApplicants
    },
    //apply
    apply: async (args) =>
    {
        const { name, email, phone, mimetype, size } = args.input
        const newApplication = new Applicant({
            name,
            email,
            phone,
            mimetype,
            size
        })
        await newApplication.save()
        return newApplication
    }
}
