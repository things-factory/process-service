import uuid from 'uuid/v4'

import { getRepository } from 'typeorm'
import { ProcessGroup, Process } from '../../../entities'

export const createProcess = {
  async createProcess(_, { process }, context) {
    const repository = getRepository(Process)
    const groupRepository = getRepository(ProcessGroup)

    const newProcess = {
      ...process,
      group: await groupRepository.findOne({
        id: process.groupId
      })
    }

    return await repository.save({
      domain: context.state.domain,
      ...newProcess,
      createor: context.state.user,
      updater: context.state.user
    })
  }
}
