export default function buildUrl(path: string = "/") {
  const pathWithSlash = path.startsWith("/") ? path : `/${path}`;
  return process.env.NEXT_PUBLIC_BASE_URL + pathWithSlash;
}
