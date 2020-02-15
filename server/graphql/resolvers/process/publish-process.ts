import { getRepository } from 'typeorm'
import { Process } from '../../../entities'

export const publishProcess = {
  async publishProcess(_, { id, published }) {
    const repository = getRepository(Process)

    const process = await repository.findOne({ id })

    process.published = !!published

    return await repository.save(process)
  }
}
