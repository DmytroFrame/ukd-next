import { CustomDefaultEntity } from '@common/entities/custom-default.entity';
import { GroupEntity } from '@src/group/entities/group.entity';
import { LessonEntity } from '@src/lesson/entities/lesson.entity';
import { UserEntity } from '@src/user/entities/user.entity';
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DepartmentEntity extends CustomDefaultEntity {
  @Column()
  name: string;

  @OneToOne(() => UserEntity)
  headOfDepartment: UserEntity;

  @OneToMany(() => GroupEntity, (group) => group)
  groups: GroupEntity[];

  @OneToMany(() => LessonEntity, (lesson) => lesson.department)
  lessons: LessonEntity[];
}
