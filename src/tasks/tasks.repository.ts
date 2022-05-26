import { User } from 'src/auth/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { getTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatus } from './task-status.enum';
import { Task } from './task.entity';

@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {
  async getTasks(filterDto: getTasksFilterDto, user: User): Promise<Task[]> {
    const { status, search } = filterDto;

    // Argumento 'task': como vamos nos referir a entidade Task na query
    const query = this.createQueryBuilder('task');

    query.where({ user }); // Pegar somente as tasks do usuário atual (usuário passado pelo controller -> services -> repository)

    if (status) {
      // ':status': Variável da query, que depois recebe um novo valor em { status }
      query.andWhere('task.status = :status', { status });
    }

    if (search) {
      query.andWhere(
        '(LOWER(task.title) LIKE LOWER(:search) OR LOWER(task.description) LIKE LOWER(:search))',
        { search: `%${search}%` }, // %: Permite buscar por partes independentes da palavra
      );
    }

    const tasks = await query.getMany();
    return tasks;
  }

  async createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
    const { title, description } = createTaskDto;
    const task = this.create({
      title,
      description,
      status: TaskStatus.OPEN,
      user,
    });

    await this.save(task);

    return task;
  }
}
