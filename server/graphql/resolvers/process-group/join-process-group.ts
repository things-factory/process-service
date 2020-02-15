import { getRepository } from 'typeorm'
import { Process, ProcessGroup } from '../../../entities'

export const joinProcessGroup = {
  async joinProcessGroup(_, { id, processIds }, context) {
    const repository = getRepository(ProcessGroup)
    const processGroup = await repository.findOne({
      where: { domain: context.state.domain, id }
    })

    const processRepository = getRepository(Process)

    await processIds.forEach(async processId => {
      let process = await processRepository.findOne({ id: processId })
      process.group = processGroup
      await processRepository.save(process)
    })

    return await repository.findOne({
      where: { domain: context.state.domain, id },
      relations: ['domain', 'creator', 'updater', 'processes']
    })
  }
}
