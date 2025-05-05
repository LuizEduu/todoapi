import { createId } from '@paralleldrive/cuid2';
import { date, pgTable, text, varchar } from 'drizzle-orm/pg-core';

export const tasksSchema = pgTable('tasks', {
  id: varchar('id')
    .$defaultFn(() => createId())
    .primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description').notNull(),
  status: varchar('status', { length: 255 }).notNull(),
  ownerId: varchar('owner_id').notNull(),
  createdAt: date('created_at').notNull(),
});
