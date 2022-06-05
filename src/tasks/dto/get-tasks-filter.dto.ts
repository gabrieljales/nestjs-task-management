import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../task-status.enum';

export class getTasksFilterDto {
  @ApiPropertyOptional()
  @IsOptional() // TS não existe em tempo de execução. Aqui garantimos que o campo é opcional na validação
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  search?: string;
}

// Ambos os filtros são opcionais
