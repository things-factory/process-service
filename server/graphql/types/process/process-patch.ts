import gql from 'graphql-tag'

export const ProcessPatch = gql`
  input ProcessPatch {
    name: String
    description: String
    model: String
    thumbnail: String
    groupId: String
  }
`
