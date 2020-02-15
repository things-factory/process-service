import { getRepository } from 'typeorm'
import { Process } from '../../../entities'

export const deleteProcess = {
  async deleteProcess(_, { id }) {
    const repository = getRepository(Process)

    return await repository.delete(id)
  }
}
