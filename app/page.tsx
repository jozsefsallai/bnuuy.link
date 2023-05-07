import Image from "next/image";

import LinkForm from "@/components/LinkForm";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen p-2">
        <Image
          src="/rabbit.svg"
          alt="bnuuy.link"
          width={100}
          height={100}
          priority
        />

        <h1 className="text-5xl md:text-6xl font-bold mt-10">bnuuy.link</h1>

        <p className="mt-3 text-sm text-gray-300 mb-10">
          <span className="text-blue-600">bnuuy.link</span> is a tiny, fast URL
          shortener running on the edge.
        </p>

        <LinkForm />
      </div>
    </main>
  );
}
