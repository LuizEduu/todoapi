import { DrizzleTasksRepository } from '../database/drizzle/repositories/drizzle-posts-repository';
import { FetchTasksUseCase } from '@/domain/application/use-cases/fetch-tasks';

export function makeFetchTasksUseCase() {
  const postRepository = new DrizzleTasksRepository();
  const fetchTasksUseCase = new FetchTasksUseCase(postRepository);
  return fetchTasksUseCase;
}
