"use client";

import Feed from "@/components/Feed";
import Share from "@/components/Share";
import Link from "next/link";
import { usePostContext } from "@/context/PostContext";

const HomePage = () => {
  const { addPost, posts } = usePostContext();

  return (
    <div>
      <div className="text-textGray border-b-borderGray flex justify-between border-b-[1px] px-4 pt-4 font-bold">
        <Link
          href="/"
          className="border-b-iconBlue flex items-center border-b-4 pb-3"
        >
          For you
        </Link>

        <Link href="/" className="flex items-center pb-3">
          Following
        </Link>

        <Link href="/" className="hidden items-center pb-3 md:flex">
          React.js
        </Link>

        <Link href="/" className="hidden items-center pb-3 md:flex">
          Javascript
        </Link>

        <Link href="/" className="hidden items-center pb-3 md:flex">
          CSS
        </Link>
      </div>

      <Share addPost={addPost} />

      <Feed posts={posts} />
    </div>
  );
};

export default HomePage;
