import { Controller } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  // Injetando TasksService no controller
  constructor(private tasksService: TasksService) {}
}
