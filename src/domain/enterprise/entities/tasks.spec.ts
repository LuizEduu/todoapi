import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Task } from './task';

describe('Task entity', () => {
  it('should create a task with the given properties', () => {
    const taskProps = {
      name: 'Test Task',
      description: 'This is a test task',
      status: 'pending',
      ownerId: new UniqueEntityID('123'),
      createdAt: new Date(),
    };

    const task = Task.create(taskProps);

    expect(task.name).toBe('Test Task');
    expect(task.description).toBe('This is a test task');
    expect(task.status).toBe('pending');
    expect(task.ownerId.toString()).toBe('123');
    expect(task.createdAt).toBeInstanceOf(Date);
  });
});
