import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IClassroomFeatures } from '../interfaces/classroom-features.interface';
import { ScheduleEntity } from '@core/schedules/entities/schedule.entity';

@Entity('сlassroom')
export class ClassroomEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name: string;

  @Column({ default: '' })
  description: string;

  @Column()
  numberOfSeats: number;

  @Column({ type: 'json', default: {} })
  features: IClassroomFeatures;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @OneToMany(() => ScheduleEntity, (schedule) => schedule.classroom)
  schedules: ScheduleEntity[];
}
