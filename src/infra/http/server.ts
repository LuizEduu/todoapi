import Fastify from 'fastify';
import { registerTaskRoute } from './controlllers/register-task.controller';
import { fetchTasksRoute } from './controlllers/fetch-tasks.controller';
const fastify = Fastify({
  logger: true,
});

async function main() {
  try {
    console.log('Starting server...');
    fastify.register(registerTaskRoute);
    fastify.register(fetchTasksRoute);
    await fastify.listen({ port: 3000 });
  } catch (err) {
    console.log(err);
    fastify.log.error(err);
    process.exit(1);
  }
}

main();
