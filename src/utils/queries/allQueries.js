import { gql, useQuery } from '@apollo/client'

// type RootQuery{
//     getJob(id: ID): Job!
//     getAllJobs: [Job!]!
//     getApplicant(id : ID!) : Applicant!
//     getAllApplicants: [Applicant!]!

// }


const GET_ALL_JOBS = gql`
 query {
  getAllJobs{
    id
    description
    role
  }
}
`
const GET_JOB = gql`
 query getJob($id: ID!){
  getJob(id : $id){
    description
    role
  }
}
`
const GET_APPLICANT = gql`
 query getApplicant($id: ID!)  {
    getApplicant(id : $id){
   name
   email
  }
}
`
const GET_ALL_APPLICANTS = gql`
 query {
    getAllApplicants{
    name
    email
  }
}
`



export {GET_ALL_JOBS, GET_JOB}