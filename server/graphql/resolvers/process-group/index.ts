import { processGroupResolver } from './process-group'
import { processGroupsResolver } from './process-groups'

import { updateProcessGroup } from './update-process-group'
import { createProcessGroup } from './create-process-group'
import { deleteProcessGroup } from './delete-process-group'
import { joinProcessGroup } from './join-process-group'

export const Query = {
  ...processGroupsResolver,
  ...processGroupResolver
}

export const Mutation = {
  ...updateProcessGroup,
  ...createProcessGroup,
  ...deleteProcessGroup,
  ...joinProcessGroup
}
