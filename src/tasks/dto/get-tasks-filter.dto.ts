import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../task-status.enum';

export class getTasksFilterDto {
  @IsOptional() // TS não existe em tempo de execução. Aqui garantimos que o campo é opcional na validação
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsOptional()
  @IsString()
  search?: string;
}

// Ambos os filtros são opcionais
