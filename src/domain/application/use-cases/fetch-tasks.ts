import { TaskRepository } from '../repositories/task-repository';

export class FetchTasksUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute() {
    return this.taskRepository.findAll();
  }
}
