import { ClassroomEntity } from '@core/classrooms/entities/classroom.entity';
import { GroupEntity } from '@core/groups/entities/group.entity';
import { LessonEntity } from '@core/lessons/entities/lesson.entity';
import { UserEntity } from '@core/users/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('schedule')
export class ScheduleEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @ApiProperty()
  @ManyToOne(() => LessonEntity, (lessson) => lessson.schedules)
  lessson: LessonEntity;

  @ApiProperty()
  @ManyToOne(() => UserEntity, (user) => user.schedules)
  teacher: UserEntity;

  @ApiProperty()
  @ManyToOne(() => ClassroomEntity, (classroom) => classroom.schedules)
  classroom: ClassroomEntity;

  @ManyToMany(() => GroupEntity, (group) => group.schedules)
  groups: GroupEntity[];

  @ApiProperty()
  @Column()
  startAt: Date;

  @ApiProperty()
  @Column()
  endAt: Date;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
