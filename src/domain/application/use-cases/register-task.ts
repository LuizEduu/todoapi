import { create } from 'domain';
import { Task } from '../../enterprise/entities/task';
import { RegisterTaskRequestDTO } from '../dto/register-task-dto';
import { TaskRepository } from '../repositories/task-repository';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';

export class RegisterTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(task: RegisterTaskRequestDTO): Promise<Task> {
    const taskToSave = Task.create({
      name: task.name,
      description: task.description,
      status: task.status,
      ownerId: new UniqueEntityID(task.ownerId),
      createdAt: new Date(),
    });

    await this.taskRepository.create(taskToSave);

    return taskToSave;
  }
}
