import { CustomDefaultEntity } from '@common/entities/custom-default.entity';
import { GroupEntity } from '@src/group/entities/group.entity';
import { ScheduleEntity } from '@src/schedule/entities/schedule.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { UserRole } from '../enums/user-role.enum';

@Entity()
export class UserEntity extends CustomDefaultEntity {
  @Column({default: ''})
  fullname: string

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: UserRole, array: true })
  roles: UserRole[];

  @ManyToOne(() => GroupEntity, (group) => group.users)
  group?: GroupEntity;

  @OneToMany(() => ScheduleEntity, schedule => schedule.teacher)
  schedules?: ScheduleEntity[]
}
