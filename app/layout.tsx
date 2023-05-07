import "./globals.css";
import { inter } from "@/lib/inter";

export const metadata = {
  title: "bnuuy.link - fast URL shortener that runs on the edge",
  description:
    "bnuuy.link is an example of a URL shortener running on the edge, leveraging Vercel KV to store links.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
