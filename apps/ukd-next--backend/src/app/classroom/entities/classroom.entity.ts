import { CustomDefaultEntity } from '@common/entities/custom-default.entity';
import { ScheduleEntity } from '@src/schedule/entities/schedule.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { IClassroomFeatures } from '../interfaces/classroom-features.interface';

@Entity()
export class ClassroomEntity extends CustomDefaultEntity {
  @Column()
  name: string;

  @Column({default: ''})
  description: string;

  @Column()
  numberOfSeats: number;

  @OneToMany(() => ScheduleEntity, (schedule) => schedule.classroom)
  schedules: ScheduleEntity[];

  @Column({ type: 'json', default: {} })
  features: IClassroomFeatures;
}
