set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "users" (
	"userId" serial NOT NULL,
	"username" TEXT NOT NULL,
	"hashedPassword" TEXT NOT NULL,
	"firstName" TEXT NOT NULL,
	"lastName" TEXT NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("userId"),
	UNIQUE ("username")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "posts" (
	"postId" serial NOT NULL,
	"placeId" TEXT NOT NULL,
	"body" TEXT NOT NULL,
	"createdBy" integer NOT NULL,
	"recRestaurants" TEXT,
	"recActivities" TEXT,
	CONSTRAINT "posts_pk" PRIMARY KEY ("postId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "toVisit" (
	"cityName" TEXT NOT NULL,
	"createdBy" integer NOT NULL,
	"isCompleted" BOOLEAN NOT NULL,
	"toVisitId" serial NOT NULL,
	CONSTRAINT "toVisit_pk" PRIMARY KEY ("toVisitId")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "posts" ADD CONSTRAINT "posts_fk0" FOREIGN KEY ("createdBy") REFERENCES "users"("userId");

ALTER TABLE "toVisit" ADD CONSTRAINT "toVisit_fk0" FOREIGN KEY ("createdBy") REFERENCES "users"("userId");
