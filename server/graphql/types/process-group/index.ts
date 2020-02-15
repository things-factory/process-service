import { Filter, Pagination, Sorting } from '@things-factory/shell'
import { ProcessGroup } from './process-group'
import { ProcessGroupList } from './process-group-list'
import { ProcessGroupPatch } from './process-group-patch'
import { NewProcessGroup } from './new-process-group'

export const Mutation = `
  createProcessGroup (
    processGroup: NewProcessGroup!
  ): ProcessGroup

  updateProcessGroup (
    id: String!
    patch: ProcessGroupPatch!
  ): ProcessGroup

  deleteProcessGroup (
    id: String!
  ): ProcessGroup

  joinProcessGroup (
    id: String!
    processIds: [String]!
  ): ProcessGroup
`

export const Query = `
  processGroups(filters: [Filter], pagination: Pagination, sortings: [Sorting]): ProcessGroupList
  processGroup(id: String!): ProcessGroup
`

export const Types = [Filter, Pagination, Sorting, ProcessGroup, NewProcessGroup, ProcessGroupPatch, ProcessGroupList]
