import { gql, useQuery } from '@apollo/client'


const DELETE_JOB = gql`
mutation{
  deleteJob(id: "62d95540bdc19a372c32347c") {
    role
    description
  skills
  }
}
`
const UPDATE_JOB = gql`
mutation{
  updateJob(input: {
    id: "62d954d9bdc19a372c323478"
    skills: ["API Design", "Hasura", "AdobeXD"]
    description: "He must sabi do backend"
    role: "Backend Engineer"
  }) {
    role
    description
    skills
    id
  }
}
`

const CREATE_JOB = gql`
mutation{
  createJob(jobInput: {
    role: "Fullstack Developer"
    description: "He will handle the backend"
    skills: ["Nodejs", "React", "Vue"]
  }){
    id
    role
    skills
    description
  }
}
`



export {CREATE_JOB, UPDATE_JOB,DELETE_JOB  }
