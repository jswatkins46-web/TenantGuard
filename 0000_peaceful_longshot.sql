CREATE TABLE "cases" (
        "id" serial PRIMARY KEY NOT NULL,
        "user_id" text NOT NULL,
        "title" text NOT NULL,
        "description" text NOT NULL,
        "state" text NOT NULL,
        "status" text DEFAULT 'open' NOT NULL,
        "category" text NOT NULL,
        "landlord_name" text,
        "landlord_email" text,
        "landlord_address" text,
        "property_address" text NOT NULL,
        "created_at" timestamp with time zone DEFAULT now() NOT NULL,
        "updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "letters" (
        "id" serial PRIMARY KEY NOT NULL,
        "case_id" integer NOT NULL,
        "content" text NOT NULL,
        "letter_type" text NOT NULL,
        "tone" text NOT NULL,
        "created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "activities" (
        "id" serial PRIMARY KEY NOT NULL,
        "type" text NOT NULL,
        "description" text NOT NULL,
        "case_id" integer NOT NULL,
        "case_title" text NOT NULL,
        "created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "letters" ADD CONSTRAINT "letters_case_id_cases_id_fk" FOREIGN KEY ("case_id") REFERENCES "public"."cases"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "activities" ADD CONSTRAINT "activities_case_id_cases_id_fk" FOREIGN KEY ("case_id") REFERENCES "public"."cases"("id") ON DELETE cascade ON UPDATE no action;