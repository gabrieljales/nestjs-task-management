import { Task } from '../tasks/task.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  // 1º arg: tipo da propriedade (Task), 2º arg: relação inversa (task -> user),
  // 3º arg: sempre que buscarmos um user, vamos obter as tarefas dele (eager loading)
  @OneToMany((_type) => Task, (task) => task.user, { eager: true })
  tasks: Task[];
}
