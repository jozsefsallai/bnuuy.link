export type CreateLinkRequest = {
  url: string;
};

export type CreateLinkResponse = {
  ok: boolean;
  id?: string;
  error?: string;
};
