import { TaskRepository } from '@/domain/application/repositories/task-repository';
import { Task } from '@/domain/enterprise/entities/task';
import { tasksSchema } from '@/db/schema/tasks';
import { db } from '../drivers/postgres';

export class DrizzleTasksRepository implements TaskRepository {
  async create(task: Task): Promise<void> {
    await db.insert(tasksSchema).values({
      id: task.id.toString(),
      name: task.name,
      description: task.description,
      status: task.status,
      ownerId: task.ownerId.toString(),
      createdAt: task.createdAt.toISOString(),
    });
  }
}
