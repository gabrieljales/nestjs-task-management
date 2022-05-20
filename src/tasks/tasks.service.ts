import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = []; // Somente esse serviço tem acesso direto a esse array

  // lembrete: Não é necessário definir o método como public, o TS já faz isso quando não definimos
  getAllTasks() {
    return this.tasks;
  }
}
