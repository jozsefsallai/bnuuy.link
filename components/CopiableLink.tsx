"use client";

import { useState } from "react";

export interface CopiableLinkProps {
  url: string;
  className?: string;
  label?: string;
}

export default function CopiableLink({
  url,
  className,
  label,
}: CopiableLinkProps) {
  const finalLabel = label ?? url;

  const [text, setText] = useState(finalLabel);

  async function onLinkClicked(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    if (typeof navigator.clipboard === "undefined") {
      return;
    }

    await navigator.clipboard.writeText(url);

    setText("Copied to the clipboard!");

    setTimeout(() => {
      setText(finalLabel);
    }, 2000);
  }

  return (
    <a href={url} className={className} onClick={onLinkClicked}>
      {text}
    </a>
  );
}
