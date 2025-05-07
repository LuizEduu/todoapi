import { makeFetchTasksUseCase } from '@/infra/factories/make-fetch-task-use-case';
import { FastifyInstance } from 'fastify';

export async function fetchTasksRoute(fastify: FastifyInstance) {
  fastify.get('/tasks', async (_, reply) => {
    const useCase = makeFetchTasksUseCase();

    const tasks = await useCase.execute();

    return reply.status(200).send({
      tasks,
    });
  });
}
