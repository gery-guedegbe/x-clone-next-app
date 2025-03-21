import Image from "next/image";
import Link from "next/link";
import PostInfo from "./PostInfo";
import PostInteractions from "./PostInteractions";
import { Post as PostType } from "@prisma/client";

type UserSummary = {
  displayName: string | null;
  username: string;
  img: string | null;
};

type Engagement = {
  _count: { likes: number; rePosts: number; comments: number };
  likes: { id: number }[];
  rePosts: { id: number }[];
  saves: { id: number }[];
};

type PostWithDetails = PostType &
  Engagement & {
    user: UserSummary;
    rePost?: (PostType & Engagement & { user: UserSummary }) | null;
  };

type PostProps = {
  post: {
    id: number;
    desc: string;
    media?: string;
    mediaType?: "image" | "video";
  };
  type?: "status" | "comment";
};

const Post = ({ post, type }: PostProps) => {
  return (
    <div className="border-borderGray border-y-[1px] p-4">
      {/* POST CONTENT */}
      <div className={`flex gap-4 ${type === "status" && "flex-col"}`}>
        {/* AVATAR */}
        <div
          className={`${
            type === "status" && "hidden"
          } relative h-10 w-10 overflow-hidden rounded-full`}
        >
          <Image src="/general/profile.png" alt="" width={100} height={100} />
        </div>

        {/* CONTENT */}
        <div className="flex flex-1 flex-col gap-2">
          {/* TOP */}
          <div className="flex w-full justify-between">
            <Link href={`/geryGuedegbe`} className="flex gap-4">
              <div
                className={`${
                  type !== "status" && "hidden"
                } relative h-10 w-10 overflow-hidden rounded-full`}
              >
                <Image
                  src="/general/profile.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>

              <div
                className={`flex flex-wrap items-center gap-2 ${
                  type === "status" && "flex-col !items-start gap-0"
                }`}
              >
                <h1 className="text-md font-bold">Jonh DOE</h1>
                <span
                  className={`text-textGray ${type === "status" && "text-sm"}`}
                >
                  @jonh_doe0
                </span>
              </div>
            </Link>

            <PostInfo />
          </div>

          {/* TEXT & MEDIA */}
          <Link href={`/jonh/status/${post.id}`}>
            <p className={`${type === "status" && "text-lg"}`}>{post.desc}</p>
          </Link>

          {post.media && post.mediaType === "image" ? (
            <Image
              src={post.media}
              alt="Post media"
              width={600}
              height={600}
              className="rounded-lg"
            />
          ) : post.media && post.mediaType === "video" ? (
            <video src={post.media} controls className="w-full rounded-lg" />
          ) : null}

          <PostInteractions />
        </div>
      </div>
    </div>
  );
};

export default Post;
