import gql from 'graphql-tag'

export const Process = gql`
  type Process {
    id: String
    name: String
    description: String
    model: String
    thumbnail: String
    published: Boolean
    group: ProcessGroup
    createdAt: String
    creator: User
    updatedAt: String
    updater: User
  }
`
