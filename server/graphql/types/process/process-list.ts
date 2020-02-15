import gql from 'graphql-tag'

export const ProcessList = gql`
  type ProcessList {
    items: [Process]
    total: Int
  }
`
