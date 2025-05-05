import Fastify from 'fastify';
import { createPostRoute } from './controlllers/create-post.controller';
const fastify = Fastify({
  logger: true,
});

async function main() {
  try {
    console.log('Starting server...');
    fastify.register(createPostRoute);
    await fastify.listen({ port: 3000 });
  } catch (err) {
    console.log(err);
    fastify.log.error(err);
    process.exit(1);
  }
}

main();
