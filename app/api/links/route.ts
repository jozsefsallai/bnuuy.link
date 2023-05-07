import { createURL } from "@/lib/db";
import isUrl from "@/lib/isUrl";
import { CreateLinkRequest, CreateLinkResponse } from "@/typings/http";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body: CreateLinkRequest = await request.json();

  if (!body.url || !isUrl(body.url)) {
    const response: CreateLinkResponse = {
      ok: false,
      error: "Invalid URL.",
    };
    return new Response(JSON.stringify(response), {
      status: 400,
    });
  }

  try {
    const id = await createURL(body.url);
    const response: CreateLinkResponse = {
      ok: true,
      id,
    };

    return new Response(JSON.stringify(response));
  } catch (err) {
    const response: CreateLinkResponse = {
      ok: false,
      error: "Internal server error.",
    };

    console.log(err);

    return new Response(JSON.stringify(response), {
      status: 500,
    });
  }
}

export const runtime = "edge";
