"use client";

import Image from "next/image";
import ProfilePost from "@/components/ProfilePost";
import { usePostContext } from "@/context/PostContext";
import Link from "next/link";

const UserPage = () => {
  const { addPost, posts } = usePostContext();

  return (
    <div className="">
      {/* PROFILE TITLE */}
      <div className="sticky top-0 z-10 flex items-center gap-8 bg-[#00000084] p-4 backdrop-blur-md">
        <Link href="/">
          <Image src="/general/noCover.png" alt="back" width={24} height={24} />
        </Link>

        <h1 className="text-lg font-bold">Jonh DOE</h1>
      </div>

      {/* INFO */}
      <div className="">
        {/* COVER & AVATAR CONTAINER */}
        <div className="relative w-full">
          {/* COVER */}
          <div className="relative aspect-[3/1] w-full">
            <Image
              src="/general/noCover_1.png"
              alt=""
              width={800}
              height={200}
            />
          </div>

          {/* AVATAR */}
          <div className="absolute left-4 aspect-square w-1/5 -translate-y-1/2 overflow-hidden rounded-full border-4 border-black bg-gray-300">
            <Image src="/general/profile.png" alt="" width={150} height={150} />
          </div>
        </div>

        <div className="flex w-full items-center justify-end gap-2 p-2">
          <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-[1px] border-gray-500">
            <Image src="/icons/more.svg" alt="more" width={20} height={20} />
          </div>

          <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-[1px] border-gray-500">
            <Image src="/icons/explore.svg" alt="more" width={20} height={20} />
          </div>

          <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-[1px] border-gray-500">
            <Image src="/icons/message.svg" alt="more" width={20} height={20} />
          </div>

          <button className="rounded-full bg-white px-4 py-2 font-bold text-black">
            Follow
          </button>
        </div>

        {/* USER DETAILS */}
        <div className="flex flex-col gap-2 p-4">
          {/* USERNAME & HANDLE */}
          <div className="">
            <h1 className="text-2xl font-bold">Jonh DOE</h1>

            <span className="text-textGray text-sm">@jonh_doe</span>
          </div>

          <p>Frontend Developer</p>
          {/* JOB & LOCATION & DATE */}
          <div className="text-textGray flex gap-4 text-[15px]">
            <div className="flex items-center gap-2">
              <Image
                src="/icons/userLocation.svg"
                alt="location"
                width={20}
                height={20}
              />

              <span>New York, USA</span>
            </div>

            <div className="flex items-center gap-2">
              <Image src="/icons/date.svg" alt="date" width={20} height={20} />

              <span>Joined May 2021</span>
            </div>
          </div>

          {/* FOLLOWINGS & FOLLOWERS */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold">100</span>

              <span className="text-textGray text-[15px]">Followers</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-bold">100</span>

              <span className="text-textGray text-[15px]">Followings</span>
            </div>
          </div>
        </div>
      </div>

      {/* FEED */}
      {/* <Feed posts={posts} /> */}

      <ProfilePost />
    </div>
  );
};

export default UserPage;
