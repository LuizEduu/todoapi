import { makeTask } from 'test/factories/makeTask';
import { TaskRepository } from '../repositories/task-repository';
import { FetchTasksUseCase } from './fetch-tasks';

describe('FetchTasksUseCase', () => {
  let fetchTasksUseCase: FetchTasksUseCase;
  let taskRepository: TaskRepository;

  beforeEach(() => {
    taskRepository = {
      findAll: vi.fn(),
      create: vi.fn(),
    };
    fetchTasksUseCase = new FetchTasksUseCase(taskRepository);
  });

  it('should fetch all tasks', async () => {
    const tasks = Array.from({ length: 5 }, (_, i) => {
      return makeTask({ name: `Task ${i + 1}` });
    });

    vi.spyOn(taskRepository, 'findAll').mockResolvedValue(tasks);

    const response = await fetchTasksUseCase.execute();

    expect(response).toHaveLength(5);
  });

  it('should return an empty array if no tasks are found', async () => {
    vi.spyOn(taskRepository, 'findAll').mockResolvedValue([]);

    const response = await fetchTasksUseCase.execute();

    expect(response).toHaveLength(0);
  });
});
