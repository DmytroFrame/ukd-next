import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserRole } from '../enums/user-role.enum';
import { GroupEntity } from '@core/groups/entities/group.entity';
import { ScheduleEntity } from '@core/schedules/entities/schedule.entity';
import { ApiProperty } from '@nestjs/swagger';
import { fakeRandomUuid } from '@common/functions';

@Entity('users')
export class UserEntity {
  @ApiProperty({ example: fakeRandomUuid() })
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @ApiProperty({ default: '' })
  @Column({ default: '' })
  fullname?: string;

  @ApiProperty()
  @Column()
  email: string;

  @Column({ select: false })
  password: string;

  @ApiProperty({ enum: UserRole, isArray: true, default: [UserRole.Student] })
  @Column({ type: 'enum', enum: UserRole, array: true, default: [UserRole.Student] })
  roles?: UserRole[];

  @ApiProperty()
  @CreateDateColumn()
  createdAt?: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt?: Date;

  @ManyToOne(() => GroupEntity, (group) => group.students)
  group?: GroupEntity;

  @OneToMany(() => ScheduleEntity, (schedule) => schedule.teacher)
  schedules?: ScheduleEntity[];
}
