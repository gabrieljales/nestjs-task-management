import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksController } from './tasks.controller';
import { TasksRepository } from './tasks.repository';
import { TasksService } from './tasks.service';

@Module({
  imports: [TypeOrmModule.forFeature([TasksRepository])], // Repositório disponível em qualquer lugar do módulo (I.D)
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
