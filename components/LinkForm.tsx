"use client";

import { inter } from "@/lib/inter";
import CopiableLink from "@/components/CopiableLink";
import { useState } from "react";
import { CreateLinkResponse } from "@/typings/http";
import buildUrl from "@/lib/buildUrl";

export default function LinkForm() {
  const [url, setUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [postUrl, setPostUrl] = useState("");

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/links", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: postUrl,
        }),
      });

      const data: CreateLinkResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Server error.");
      }

      setUrl(buildUrl(data.id));
      setPostUrl("");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col md:flex-row items-center gap-4 mb-10 px-2"
      >
        <input
          onChange={(e) => setPostUrl(e.target.value)}
          className={`${inter.className} w-96 max-w-full`}
          type="url"
          name="url"
          placeholder="Enter a URL to shorten"
          autoComplete="off"
          required
        />

        <button type="submit">Shorten</button>
      </form>

      {!url && !loading && !error && (
        <div className="text-gray-400">
          Enter a URL and click on &quot;Shorten&quot;
        </div>
      )}

      {url && <CopiableLink url={url} className="font-bold" />}

      {loading && <div className="text-gray-400">Loading...</div>}

      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
}
