import kv from "@vercel/kv";

import { uid } from "@/lib/uid";

export const getURL = async (id: string): Promise<string | null> => {
  return kv.get<string>(id);
};

export const createURL = async (url: string): Promise<string> => {
  const id = uid();
  await kv.set(id, url);
  return id;
};
