import { DepartmentEntity } from '@core/departments/entities/department.entity';
import { LessonEntity } from '@core/lessons/entities/lesson.entity';
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

@Entity('groups')
export class GroupEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name: string;

  @OneToOne(() => UserEntity)
  elder: UserEntity;

  @OneToOne(() => UserEntity)
  curator: UserEntity;

  @OneToMany(() => UserEntity, (user) => user.group)
  students: UserEntity[];

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @ManyToOne(() => DepartmentEntity, (department) => department.groups)
  department: DepartmentEntity;

  @ManyToMany(() => LessonEntity, (lesson) => lesson.groups)
  lessons: LessonEntity[];

  @ManyToMany(() => ScheduleEntity, schedule => schedule.groups)
  schedules: ScheduleEntity[]
}
