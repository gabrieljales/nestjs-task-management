import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '0.0.0.0',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'task-management',
      autoLoadEntities: true, // Seguir a convenção name.entity.ts
      synchronize: true, // Não recomendado em produção
    }),
    AuthModule,
  ],
})
export class AppModule {}
