import postgres from 'postgres';

import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';

async function migration() {
  const connection = postgres(process.env.DATABASE_URL!, { max: 1 });
  const db = drizzle(connection);

  await migrate(db, { migrationsFolder: 'drizzle' });

  console.log('Migrations applied succesfully!');

  await connection.end();

  process.exit();
}

migration();
