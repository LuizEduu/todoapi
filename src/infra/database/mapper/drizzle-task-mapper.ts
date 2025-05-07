import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Task } from '@/domain/enterprise/entities/task';

type DrizzleTaskProps = {
  id: string;
  name: string;
  description: string;
  status: string;
  ownerId: string;
  createdAt: string;
};

export class DrizzleTaskMapper {
  static toDomain(task: DrizzleTaskProps): Task {
    return Task.create(
      {
        name: task.name,
        description: task.description,
        status: task.status,
        ownerId: new UniqueEntityID(task.ownerId),
        createdAt: new Date(task.createdAt),
      },
      new UniqueEntityID(task.id),
    );
  }
}
