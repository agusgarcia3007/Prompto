import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.string().url(),
  PINECONE_API_KEY: z.string(),
  PINECONE_INDEX: z.string(),
  OPENAI_API_KEY: z.string(),
});

export const env = envSchema.parse(process.env);
