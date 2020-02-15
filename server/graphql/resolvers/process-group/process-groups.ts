import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { ProcessGroup } from '../../../entities'

export const processGroupsResolver = {
  async processGroups(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(ProcessGroup).createQueryBuilder()
    buildQuery(queryBuilder, params, context)
    const [items, total] = await queryBuilder
      .leftJoinAndSelect('ProcessGroup.domain', 'Domain')
      .leftJoinAndSelect('ProcessGroup.creator', 'Creator')
      .leftJoinAndSelect('ProcessGroup.updater', 'Updater')
      .getManyAndCount()

    return { items, total }
  }
}
