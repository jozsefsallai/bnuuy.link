import { NextRequest, NextResponse } from "next/server";

import { getURL } from "@/lib/db";
import { AppRouteHandlerFnContext } from "@/typings/context";

export async function GET(
  request: NextRequest,
  context: AppRouteHandlerFnContext
) {
  const id = context?.params?.id;

  if (typeof id === "string") {
    const url = await getURL(id);

    if (url) {
      return NextResponse.redirect(url, 301);
    }
  }

  return new NextResponse("Not Found", {
    status: 404,
  });
}

export const runtime = "edge";
