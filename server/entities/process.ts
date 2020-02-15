import { User } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import { Column, CreateDateColumn, Entity, Index, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { ProcessGroup } from './process-group'

@Entity('processes')
@Index('ix_process_0', (process: Process) => [process.domain, process.name], { unique: true })
@Index('ix_process_1', (process: Process) => [process.domain, process.group])
export class Process {
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

  @Column({
    nullable: true
  })
  model: string

  @Column()
  thumbnail: string

  @Column({
    default: false
  })
  published: boolean

  @ManyToOne(
    type => ProcessGroup,
    group => group.processes
  )
  group: ProcessGroup

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
