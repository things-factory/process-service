import gql from 'graphql-tag'

export const ProcessGroupPatch = gql`
  input ProcessGroupPatch {
    name: String
    description: String
  }
`
