/* eslint-disable @next/next/no-img-element */
"use client";

import { posts } from "@/data/data";
import { useSearchParams } from "next/navigation";

function PostPage() {
  const searchParams = useSearchParams();

  const title = searchParams.get("title");

  const postFound = posts.find((value) => value.title === title);
  console.log(postFound);

  return (
    <section className="mb-12">
      <div className="text-center">
        <h1 className="sm:text-4xl mb-5 text-3xl font-bold">
          {postFound.title}
        </h1>
        <img
          src={postFound.imageUrl}
          alt={postFound.title}
          className="mb-2 rounded"
        />
        <p className="sm:text-xl text-lg text-gray-800">
          {postFound.description}
        </p>
      </div>
    </section>
  );
}

export default PostPage;
