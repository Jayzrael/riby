import { gql, useQuery } from "@apollo/client";

// type RootQuery{
//     getJob(id: ID): Job!
//     getAllJobs: [Job!]!
//     getApplicant(id : ID!) : Applicant!
//     getAllApplicants: [Applicant!]!

// }

const GET_ALL_JOBS = gql`
  query {
    getAllJobs {
      id
      description
      role
      skills
    }
  }
`;

const GET_JOB = gql`
  query getJob($id: ID!) {
    getJob(id: $id) {
      description
      role
      skills
    }
  }
`;

export { GET_ALL_JOBS, GET_JOB };
