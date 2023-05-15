import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from '@core/core.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'database',
      username: 'postgres',
      password: 'root',
      database: 'ukd-next',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CoreModule,
    AuthModule,
  ],
})
export class AppModule {}
