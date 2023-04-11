import { DepartmentEntity } from '@core/departments/entities/department.entity';
import { GroupEntity } from '@core/groups/entities/group.entity';
import { ScheduleEntity } from '@core/schedules/entities/schedule.entity';
import { UserEntity } from '@core/users/entities/user.entity';
import {
    Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('lesson')
export class LessonEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name: string;

  @OneToOne(() => UserEntity)
  teacher: UserEntity;

  @ManyToOne(() => DepartmentEntity, (department) => department.lessons)
  department: DepartmentEntity;

  @ManyToMany(() => GroupEntity, (group) => group.lessons)
  groups: GroupEntity[];

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @OneToMany(() => ScheduleEntity, schedule => schedule.lessson)
  schedules: ScheduleEntity[]
}
