import { GroupEntity } from '@core/groups/entities/group.entity';
import { LessonEntity } from '@core/lessons/entities/lesson.entity';
import { UserEntity } from '@core/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('departments')
export class DepartmentEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name: string;

  @OneToOne(() => UserEntity)
  headOfDepartment: UserEntity;

  @OneToMany(() => GroupEntity, (group) => group.department)
  groups: GroupEntity[];

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @OneToMany(() => LessonEntity, (lesson) => lesson.department)
  lessons: LessonEntity[];
}
