CREATE TABLE "subscriptions" (
	"user_id" text PRIMARY KEY NOT NULL,
	"trial_started_at" timestamp with time zone DEFAULT now() NOT NULL,
	"subscription_active" boolean DEFAULT false NOT NULL,
	"plan" text,
	"subscription_activated_at" timestamp with time zone,
	"stripe_customer_id" text,
	"free_letters_used" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
