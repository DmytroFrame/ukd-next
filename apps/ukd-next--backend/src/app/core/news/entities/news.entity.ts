import { UserEntity } from '@core/users/entities/user.entity';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('news')
export class NewsEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @ApiProperty()
  @Column()
  title!: string;

  @ApiProperty()
  @Column()
  description?: string;

  @ApiPropertyOptional({ default: '' })
  @Column({ default: '' })
  image?: string;

  @OneToOne(() => UserEntity)
  author!: UserEntity;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
