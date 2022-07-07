import { gql, useQuery } from '@apollo/client'

// type RootMutation{
//     postJob(jobInput: JobInput): Job!
//     apply(input : ApplicantDetails): Applicant!
//     deleteJob(id: ID): Job!
//     updateJob(jobInput: JobInputUpdate): Job!
// }


const POST_JOB = gql`
 mutation postJob($JobInput: JobInput)  {
    getApplicant(jobInput : $JobInput){
    role
    description
  }
}
`
const APPLY = gql`
 mutation apply($JobInput: JobInput)  {
    getApplicant(jobInput : $JobInput){
    role
    description
  }
}
`


export {POST_JOB}
