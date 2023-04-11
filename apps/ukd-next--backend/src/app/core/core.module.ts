import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { LessonsModule } from './lessons/lessons.module';
import { ClassroomsModule } from './classrooms/classrooms.module';
import { DepartmentsModule } from './departments/departments.module';
import { GroupsModule } from './groups/groups.module';
import { SchedulesModule } from './schedules/schedules.module';
import { NewsModule } from './news/news.module';

@Module({
  imports: [
    UsersModule,
    GroupsModule,
    DepartmentsModule,
    ClassroomsModule,
    LessonsModule,
    SchedulesModule,
    NewsModule,
  ],
})
export class CoreModule {}
