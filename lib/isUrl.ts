export default function isUrl(url: string) {
  try {
    new URL(url);
    return true;
  } catch (_a) {
    return false;
  }
}
