import { processResolver } from './process'
import { processesResolver } from './processes'

import { publishProcess } from './publish-process'
import { updateProcess } from './update-process'
import { createProcess } from './create-process'
import { deleteProcess } from './delete-process'

export const Query = {
  ...processesResolver,
  ...processResolver
}

export const Mutation = {
  ...publishProcess,
  ...updateProcess,
  ...createProcess,
  ...deleteProcess
}
