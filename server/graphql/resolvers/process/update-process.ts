import { getRepository } from 'typeorm'
import { Process, ProcessGroup } from '../../../entities'

export const updateProcess = {
  async updateProcess(_, { id, patch }, context) {
    const repository = getRepository(Process)

    const process = await repository.findOne({ id })

    if (patch.groupId) {
      const groupRepository = getRepository(ProcessGroup)
      process.group = await groupRepository.findOne({
        id: patch.groupId
      })

      delete patch.groupId
    }

    return await repository.save({
      ...process,
      ...patch,
      updater: context.state.user
    })
  }
}
