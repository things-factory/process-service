import { getRepository } from 'typeorm'
import { Process } from '../../../entities'
import { ListParam, buildQuery } from '@things-factory/shell'

export const processesResolver = {
  async processes(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(Process).createQueryBuilder()
    buildQuery(queryBuilder, params, context)
    const [items, total] = await queryBuilder
      .leftJoinAndSelect('Process.domain', 'Domain')
      .leftJoinAndSelect('Process.creator', 'Creator')
      .leftJoinAndSelect('Process.updater', 'Updater')
      .getManyAndCount()

    return { items, total }
  }
}
