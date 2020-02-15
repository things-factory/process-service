import { Filter, Pagination, Sorting } from '@things-factory/shell'
import { Process } from './process'
import { ProcessList } from './process-list'
import { ProcessPatch } from './process-patch'
import { NewProcess } from './new-process'

export const Mutation = `
  createProcess (
    process: NewProcess!
  ): Process

  updateProcess (
    id: String!
    patch: ProcessPatch!
  ): Process

  deleteProcess (
    id: String!
  ): Process

  publishProcess (
    id: String!
    published: Boolean
  ): Process
`

export const Query = `
  processes(filters: [Filter], pagination: Pagination, sortings: [Sorting]): ProcessList
  process(id: String!): Process
`

export const Types = [Filter, Pagination, Sorting, Process, NewProcess, ProcessPatch, ProcessList]
