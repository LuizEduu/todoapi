import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Task } from '@/domain/enterprise/entities/task';

export function makeTask(task: Partial<Task> = {}, id?: UniqueEntityID): Task {
  return Task.create(
    {
      name: 'Test Task',
      description: 'This is a test task',
      status: 'pending',
      ownerId: new UniqueEntityID('123'),
      createdAt: new Date(),
      ...task,
    },
    id,
  );
}
