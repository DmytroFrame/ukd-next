import { CustomDefaultEntity } from '@common/entities/custom-default.entity';
import { DepartmentEntity } from '@src/department/entities/department.entity';
import { LessonEntity } from '@src/lesson/entities/lesson.entity';
import { ScheduleEntity } from '@src/schedule/entities/schedule.entity';
import { UserEntity } from '@src/user/entities/user.entity';
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne } from 'typeorm';

@Entity()
export class GroupEntity extends CustomDefaultEntity {
  @Column()
  name: string;

  @OneToOne(() => UserEntity)
  curator: UserEntity;

  @OneToOne(() => UserEntity)
  elder: UserEntity;

  @OneToMany(() => UserEntity, (user) => user.group)
  users: UserEntity[];

  @ManyToOne(() => DepartmentEntity, (department) => department.groups)
  department: DepartmentEntity;

  @ManyToMany(() => LessonEntity, (lesson) => lesson.groups)
  lessons: LessonEntity[];

  @ManyToMany(() => ScheduleEntity, schedule => schedule.groups)
  schedules: ScheduleEntity[]
}
