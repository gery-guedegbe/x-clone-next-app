import Link from "next/link";
import Image from "next/image";

const PopularTags = () => {
  return (
    <div className="border-borderGray flex flex-col gap-4 rounded-2xl border-[1px] p-4">
      <h1 className="text-textGrayLight text-xl font-bold">
        {"What's"} Happening
      </h1>

      {/* TREND EVENT */}
      <div className="flex gap-4">
        <div className="relative h-20 w-20 overflow-hidden rounded-xl">
          <Image
            src="/general/event.jpg"
            alt="event"
            width={120}
            height={120}
          />
        </div>

        <div className="flex-1">
          <h2 className="text-textGrayLight font-bold">
            Nadal v Federer Grand Slam
          </h2>

          <span className="text-textGray text-sm">Last Night</span>
        </div>
      </div>

      {/* TOPICS */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology • Trending</span>

          <Image src="/icons/infoMore.svg" alt="info" width={16} height={16} />
        </div>

        <h2 className="text-textGrayLight font-bold">OpenAI</h2>

        <span className="text-textGray text-sm">20K posts</span>
      </div>

      {/* TOPICS */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology • Trending</span>

          <Image src="/icons/infoMore.svg" alt="info" width={16} height={16} />
        </div>

        <h2 className="text-textGrayLight font-bold">OpenAI</h2>

        <span className="text-textGray text-sm">20K posts</span>
      </div>

      <Link href="/" className="text-iconBlue">
        Show More
      </Link>
    </div>
  );
};

export default PopularTags;
