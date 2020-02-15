import uuid from 'uuid/v4'

import { getRepository } from 'typeorm'
import { ProcessGroup } from '../../../entities'

export const createProcessGroup = {
  async createProcessGroup(_, { processGroup }, context) {
    return await getRepository(ProcessGroup).save({
      domain: context.state.domain,
      ...processGroup,
      creator: context.state.user,
      updater: context.state.user
    })
  }
}
