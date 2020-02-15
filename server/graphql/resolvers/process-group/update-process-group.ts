import { getRepository } from 'typeorm'
import { ProcessGroup } from '../../../entities'

export const updateProcessGroup = {
  async updateProcessGroup(_, { id, patch }, context) {
    const repository = getRepository(ProcessGroup)

    const processGroup = await repository.findOne({
      where: { domain: context.state.domain, id }
    })

    return await repository.save({
      ...processGroup,
      ...patch
    })
  }
}
