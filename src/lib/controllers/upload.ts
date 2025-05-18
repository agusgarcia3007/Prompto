import { openai } from "@/lib/api/openai";
import { pcIndex } from "@/lib/api/pinecone";
import { chunkText } from "@/lib/utils";
import { Session, User } from "better-auth";
import { NextRequest, NextResponse } from "next/server";
import pdf from "pdf-parse";

export async function uploadHandler(
  req: NextRequest,
  session?: { session: Session; user: User }
) {
  const formData = await req.formData();
  const file = formData.get("file") as File;
  const chatbotId = formData.get("chatbotId") as string;

  if (!file || !chatbotId) {
    return NextResponse.json({ error: "Missing data." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const { text } = await pdf(buffer);
  const chunks = chunkText(text, 500);

  const MAX_CHUNKS = 100;

  if (chunks.length > MAX_CHUNKS) {
    return NextResponse.json(
      {
        error: `The document is too long (chunks: ${chunks.length}). Maximum allowed: ${MAX_CHUNKS}.`,
      },
      { status: 400 }
    );
  }

  const pineconeIndex = pcIndex.namespace(chatbotId);
  const timestamp = Date.now();

  const vectors = await Promise.all(
    chunks.map(async (chunk, i) => {
      const res = await openai.embeddings.create({
        model: "text-embedding-ada-002",
        input: chunk,
      });

      return {
        id: `${chatbotId}-${timestamp}-${i}`,
        values: res.data[0].embedding,
        metadata: {
          text: chunk,
          chatbotId,
          userId: session?.user?.id ?? "",
        },
      };
    })
  );

  await pineconeIndex.upsert(vectors);

  return NextResponse.json({
    success: true,
    inserted: vectors.length,
  });
}
