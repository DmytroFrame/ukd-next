import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { GroupModule } from './group/group.module';
import { LessonModule } from './lesson/lesson.module';
import { ScheduleModule } from './schedule/schedule.module';
import { DepartmentModule } from './department/department.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsModule } from './news/news.module';
import { AuthModule } from './auth/auth.module';
import { ClassroomModule } from './classroom/classroom.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: 'root',
      database: 'ukd-next',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    GroupModule,
    LessonModule,
    ScheduleModule,
    DepartmentModule,
    NewsModule,
    AuthModule,
    ClassroomModule,
  ],
})
export class AppModule {}
