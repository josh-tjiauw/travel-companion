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



CREATE TABLE "posts" (
	"postId" serial NOT NULL,
	"cityId" TEXT NOT NULL,
	"description" TEXT NOT NULL,
	"imageLink" TEXT NOT NULL,
	"createdBy" integer NOT NULL,
	CONSTRAINT "posts_pk" PRIMARY KEY ("postId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "toVisit" (
	"cityName" TEXT NOT NULL,
	"createdBy" integer NOT NULL,
	"isCompleted" BOOLEAN NOT NULL,
	"cityId" integer NOT NULL,
	"toVisitId" serial NOT NULL,
	CONSTRAINT "toVisit_pk" PRIMARY KEY ("toVisitId")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "posts" ADD CONSTRAINT "posts_fk0" FOREIGN KEY ("createdBy") REFERENCES "users"("userId");

ALTER TABLE "toVisit" ADD CONSTRAINT "toVisit_fk0" FOREIGN KEY ("createdBy") REFERENCES "users"("userId");
