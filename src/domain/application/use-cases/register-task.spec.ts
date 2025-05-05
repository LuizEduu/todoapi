import { createId } from '@paralleldrive/cuid2';
import { TaskRepository } from '../repositories/task-repository';
import { RegisterTaskUseCase } from './register-task';

let tasksRepository: TaskRepository;
let sut: RegisterTaskUseCase;
describe('RegisterTaskUseCase', () => {
  beforeEach(() => {
    tasksRepository = {
      create: vi.fn(),
    };
    sut = new RegisterTaskUseCase(tasksRepository);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should register a task', async () => {
    const task = {
      name: 'Test Task',
      description: 'This is a test task',
      status: 'pending',
      ownerId: 'owner-id',
    };

    const createdTask = await sut.execute(task);

    expect(createdTask).toHaveProperty('id');
    expect(createdTask).toHaveProperty('name', task.name);
    expect(createdTask).toHaveProperty('description', task.description);
    expect(createdTask).toHaveProperty('status', task.status);
    expect(createdTask).toHaveProperty('ownerId');
    expect(createdTask).toHaveProperty('createdAt');
  });
});
