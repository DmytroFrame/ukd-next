import { CustomDefaultEntity } from '@common/entities/custom-default.entity';
import { ApiProperty } from '@nestjs/swagger';
import { ClassroomEntity } from '@src/classroom/entities/classroom.entity';
import { GroupEntity } from '@src/group/entities/group.entity';
import { LessonEntity } from '@src/lesson/entities/lesson.entity';
import { UserEntity } from '@src/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne } from 'typeorm';

@Entity()
export class ScheduleEntity extends CustomDefaultEntity {
  @ApiProperty()
  @ManyToOne(() => LessonEntity, (lessson) => lessson.schedules)
  lessson: LessonEntity;

  @ApiProperty()
  @ManyToOne(() => UserEntity, user => user.schedules)
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
}
