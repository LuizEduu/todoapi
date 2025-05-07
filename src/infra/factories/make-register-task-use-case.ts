import { RegisterTaskUseCase } from '@/domain/application/use-cases/register-task';
import { DrizzleTasksRepository } from '../database/drizzle/repositories/drizzle-posts-repository';

export function makeRegisterTaskUseCase() {
  const postRepository = new DrizzleTasksRepository();
  const createPostUseCase = new RegisterTaskUseCase(postRepository);
  return createPostUseCase;
}
