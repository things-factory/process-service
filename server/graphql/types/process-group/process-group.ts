import gql from 'graphql-tag'

export const ProcessGroup = gql`
  type ProcessGroup {
    id: String
    name: String
    description: String
    processes: [Process]
    createdAt: String
    creator: User
    updatedAt: String
    updater: User
  }
`
