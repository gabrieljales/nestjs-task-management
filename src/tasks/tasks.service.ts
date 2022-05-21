import { Injectable } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = []; // Somente esse serviço tem acesso direto a esse array

  // lembrete: Não é necessário definir o método como public, o TS já faz isso quando não definimos
  getAllTasks(): Task[] {
    return this.tasks;
  }
}
