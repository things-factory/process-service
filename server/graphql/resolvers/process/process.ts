import { getRepository } from 'typeorm'
import { Process } from '../../../entities'

export const processResolver = {
  async process(_, { id }, context, info) {
    return await getRepository(Process).findOne({
      where: { domain: context.state.domain, id },
      relations: ['domain', 'group', 'creator', 'updater']
    })
  }
}
