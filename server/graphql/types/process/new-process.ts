import gql from 'graphql-tag'

export const NewProcess = gql`
  input NewProcess {
    name: String!
    description: String
    model: String!
    thumbnail: String!
    groupId: String!
  }
`
