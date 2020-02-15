import gql from 'graphql-tag'

export const NewProcessGroup = gql`
  input NewProcessGroup {
    name: String!
    description: String
  }
`
