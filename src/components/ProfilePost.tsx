import Image from "next/image";
import PostInfo from "./PostInfo";
import PostInteractions from "./PostInteractions";
import Link from "next/link";

interface FileDetailsResponse {
  width: number;
  height: number;
  filePath: string;
  url: string;
  fileType: string;
  customMetadata?: { sensitive: boolean };
}

const ProfilePost = ({ type }: { type?: "status" | "comment" }) => {
  return (
    <div className="flex h-full w-full flex-col items-start gap-4">
      <div className="border-borderGray border-y-[1px] p-4">
        {/* POST TYPE */}
        <div className="text-textGray from-bold mb-2 flex items-center gap-2 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path
              fill="#71767b"
              d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
            />
          </svg>

          <span>jonh_doe0 reposted</span>
        </div>
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
              <Link href={`/user`} className="flex gap-4">
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

                  {type !== "status" && (
                    <span className="text-textGray">1 day ago</span>
                  )}
                </div>
              </Link>

              <PostInfo />
            </div>

            {/* TEXT & MEDIA */}

            <p className={`${type === "status" && "text-lg"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              animi. Laborum commodi aliquam alias molestias odio, ab in,
              reprehenderit excepturi temporibus, ducimus necessitatibus fugiat
              iure nam voluptas soluta pariatur inventore.
            </p>

            <Image src="/general/post_1.jpg" alt="" width={600} height={600} />
            {/* AFTER FETCHING THE POST MEDIA */}
            {/* {fileDetails && fileDetails.fileType === "image" ? (
            <Image
              path={fileDetails.filePath}
              alt=""
              w={fileDetails.width}
              h={fileDetails.height}
              className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}
            />
          ) : (
            <Video
              path={fileDetails.filePath}
              className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}
            />
          )} */}
            {type === "status" && (
              <span className="text-textGray">8:41 PM · Dec 5, 2024</span>
            )}

            <PostInteractions />
          </div>
        </div>
      </div>
      <div className="border-borderGray border-y-[1px] p-4">
        {/* POST TYPE */}
        <div className="text-textGray from-bold mb-2 flex items-center gap-2 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path
              fill="#71767b"
              d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
            />
          </svg>

          <span>jonh_doe0 reposted</span>
        </div>
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
              <Link href={`/user`} className="flex gap-4">
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

                  {type !== "status" && (
                    <span className="text-textGray">1 day ago</span>
                  )}
                </div>
              </Link>

              <PostInfo />
            </div>

            {/* TEXT & MEDIA */}

            <p className={`${type === "status" && "text-lg"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              animi. Laborum commodi aliquam alias molestias odio, ab in,
              reprehenderit excepturi temporibus, ducimus necessitatibus fugiat
              iure nam voluptas soluta pariatur inventore.
            </p>

            <Image src="/general/post_2.jpg" alt="" width={600} height={600} />
            {/* AFTER FETCHING THE POST MEDIA */}
            {/* {fileDetails && fileDetails.fileType === "image" ? (
            <Image
              path={fileDetails.filePath}
              alt=""
              w={fileDetails.width}
              h={fileDetails.height}
              className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}
            />
          ) : (
            <Video
              path={fileDetails.filePath}
              className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}
            />
          )} */}
            {type === "status" && (
              <span className="text-textGray">8:41 PM · Dec 5, 2024</span>
            )}

            <PostInteractions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePost;
