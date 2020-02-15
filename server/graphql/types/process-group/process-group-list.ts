import gql from 'graphql-tag'

export const ProcessGroupList = gql`
  type ProcessGroupList {
    items: [ProcessGroup]
    total: Int
  }
`
