import { CustomDefaultEntity } from '@common/entities/custom-default.entity';
import { DepartmentEntity } from '@src/department/entities/department.entity';
import { GroupEntity } from '@src/group/entities/group.entity';
import { ScheduleEntity } from '@src/schedule/entities/schedule.entity';
import { UserEntity } from '@src/user/entities/user.entity';
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne } from 'typeorm';

@Entity()
export class LessonEntity extends CustomDefaultEntity {
  @Column()
  name: string;

  @OneToOne(() => UserEntity)
  teacher: UserEntity;

  @ManyToOne(() => DepartmentEntity, (department) => department.lessons)
  department: DepartmentEntity;

  @ManyToMany(() => GroupEntity, (group) => group.lessons)
  groups: GroupEntity[];

  @OneToMany(() => ScheduleEntity, schedule => schedule.lessson)
  schedules: ScheduleEntity[]
}
