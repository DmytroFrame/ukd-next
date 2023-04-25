import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { LessonsModule } from './lessons/lessons.module';
import { ClassroomsModule } from './classrooms/classrooms.module';
import { DepartmentsModule } from './departments/departments.module';
import { GroupsModule } from './groups/groups.module';
import { SchedulesModule } from './schedules/schedules.module';
import { NewsModule } from './news/news.module';
import { APP_FILTER } from '@nestjs/core';

import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { TypeORMError } from 'typeorm';

@Catch(TypeORMError)
export class TypeOrmFilter implements ExceptionFilter {
  catch(exception: TypeORMError, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    const customResponse = {
      status: 500,
      message: exception.message,
      timestamp: new Date().toISOString(),
    };
    response.status(customResponse.status).json(customResponse);
  }
}

@Module({
  imports: [UsersModule, GroupsModule, DepartmentsModule, ClassroomsModule, LessonsModule, SchedulesModule, NewsModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: TypeOrmFilter,
    },
  ],
})
export class CoreModule {}
