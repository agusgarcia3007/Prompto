import { auth } from "@/lib/auth";
import { Session, User } from "better-auth";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

type Handler = (
  req: NextRequest,
  session?: { user: User; session: Session }
) => Promise<Response>;
type Middleware = (req: NextRequest) => Promise<Response | void>;

export function endpointBuilder({
  isPrivate = false,
  handler,
  middlewares = [],
  errorMessage = "Internal server error",
  errorStatus = 500,
}: {
  isPrivate?: boolean;
  handler: Handler;
  middlewares?: Middleware[];
  errorMessage?: string;
  errorStatus?: number;
}) {
  return async function (req: NextRequest): Promise<Response> {
    try {
      if (isPrivate) {
        const session = await auth.api.getSession({
          headers: await headers(),
        });

        if (!session) {
          return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        return await handler(req, session);
      }

      for (const mw of middlewares) {
        const result = await mw(req);
        if (result instanceof Response) return result;
      }

      return await handler(req);
    } catch (err) {
      console.error("[endpointBuilder]:", err);
      return NextResponse.json(
        { error: errorMessage },
        { status: errorStatus }
      );
    }
  };
}
