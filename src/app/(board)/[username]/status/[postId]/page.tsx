import Comments from "@/components/Comments";
import Image from "next/image";
import Link from "next/link";

const StatusPage = () => {
  return (
    <div className="">
      <div className="sticky top-0 z-10 flex items-center gap-8 bg-[#00000084] p-4 backdrop-blur-md">
        <Link href="/">
          <Image src="icons/back.svg" alt="back" width={24} height={24} />
        </Link>

        <h1 className="text-lg font-bold">Post</h1>
      </div>

      {/* <Post type="status" /> */}

      <Comments />
    </div>
  );
};

export default StatusPage;
