import { User } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Process } from './process'

@Entity('process_groups')
@Index('ix_process_group_0', (group: ProcessGroup) => [group.domain, group.name], { unique: true })
export class ProcessGroup {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @Column({
    nullable: false
  })
  name: string

  @Column({
    nullable: true
  })
  description: string

  @OneToMany(
    type => Process,
    process => process.group
  )
  processes: Process[]

  @ManyToOne(type => User, {
    nullable: true
  })
  creator: User

  @ManyToOne(type => User, {
    nullable: true
  })
  updater: User

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
