set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "users" (
	"userId" serial NOT NULL,
	"firstName" TEXT NOT NULL,
	"lastName" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	"password" TEXT NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "todos" (
	"todoTitle" TEXT NOT NULL,
	"isCompleted" BOOLEAN NOT NULL,
	"todosCityId" integer NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "posts" (
	"postId" serial NOT NULL,
	"todosCityId" TEXT NOT NULL,
	"description" TEXT NOT NULL,
	"imageLink" TEXT NOT NULL,
	"createdBy" integer NOT NULL,
	CONSTRAINT "posts_pk" PRIMARY KEY ("postId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "todosCity" (
	"cityName" TEXT NOT NULL,
	"createdBy" integer NOT NULL,
	"isCompleted" BOOLEAN NOT NULL,
	"todosCityId" serial NOT NULL,
	CONSTRAINT "todosCity_pk" PRIMARY KEY ("todosCityId")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "todos" ADD CONSTRAINT "todos_fk0" FOREIGN KEY ("todosCityId") REFERENCES "todosCity"("todosCityId");

ALTER TABLE "posts" ADD CONSTRAINT "posts_fk0" FOREIGN KEY ("todosCityId") REFERENCES "todosCity"("todosCityId");
ALTER TABLE "posts" ADD CONSTRAINT "posts_fk1" FOREIGN KEY ("createdBy") REFERENCES "users"("userId");

ALTER TABLE "todosCity" ADD CONSTRAINT "todosCity_fk0" FOREIGN KEY ("createdBy") REFERENCES "users"("userId");
