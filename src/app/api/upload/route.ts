import { endpointBuilder } from "@/lib/api/endpoint-builder";
import { uploadHandler } from "@/lib/controllers/upload";

export const POST = endpointBuilder({
  isPrivate: true,
  handler: uploadHandler,
});
