import { TaskStatus } from '../task.model';

export class getTasksFilterDto {
  status?: TaskStatus;
  search?: string;
}

// Ambos os filtros são opcionais
