CREATE TABLE "tasks" (
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"status" varchar(255) NOT NULL,
	"owner_id" varchar NOT NULL,
	"created_at" date NOT NULL
);
