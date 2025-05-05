import { makeRegisterTaskUseCase } from '@/infra/factories/make-create-post-use-case';
import { FastifyInstance, FastifyRequest } from 'fastify';

interface CreateTaskBody {
  name: string;
  description: string;
  status: string;
  ownerId: string;
}

export async function createPostRoute(fastify: FastifyInstance) {
  fastify.post(
    '/tasks',
    async (request: FastifyRequest<{ Body: CreateTaskBody }>, reply) => {
      const { name, description, status, ownerId } = request.body;

      const useCase = makeRegisterTaskUseCase();

      const task = await useCase.execute({
        name,
        description,
        status,
        ownerId,
      });

      return reply.status(201).send({
        task,
      });
    },
  );
}
