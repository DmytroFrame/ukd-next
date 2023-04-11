import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { UserRole } from '../enums/user-role.enum';
import { GroupEntity } from '@core/groups/entities/group.entity';
import { ScheduleEntity } from '@core/schedules/entities/schedule.entity';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ default: '' })
  fullname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: UserRole, array: true })
  roles: UserRole[];

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @ManyToOne(() => GroupEntity, (group) => group.students)
  group?: GroupEntity;

  @OneToMany(() => ScheduleEntity, (schedule) => schedule.teacher)
  schedules?: ScheduleEntity[];
}
