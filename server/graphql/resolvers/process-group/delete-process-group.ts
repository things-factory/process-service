import { getRepository } from 'typeorm'
import { ProcessGroup } from '../../../entities'

export const deleteProcessGroup = {
  async deleteProcessGroup(_, { id }) {
    const repository = getRepository(ProcessGroup)

    /* TODO - 그룹에 소속된 보드가 있는 경우에는 그룹을 지워서는 안된다. */
    const processGroup = await repository.findOne({ id })

    return await repository.delete(id)
  }
}
