import { env } from "@/lib/env";
import { Pinecone } from "@pinecone-database/pinecone";

export const pc = new Pinecone({
  apiKey: env.PINECONE_API_KEY,
});

export const pcIndex = pc.Index(env.PINECONE_INDEX);
