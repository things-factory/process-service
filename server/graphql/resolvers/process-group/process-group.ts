import { getRepository } from 'typeorm'
import { ProcessGroup } from '../../../entities'

export const processGroupResolver = {
  async processGroup(_, { id }, context, info) {
    return await getRepository(ProcessGroup).findOne({
      where: { domain: context.state.domain, id },
      relations: ['domain', 'creator', 'updater']
    })
  }
}
