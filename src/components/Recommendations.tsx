import Link from "next/link";
import Image from "next/image";

const Recommendations = () => {
  return (
    <div className="border-borderGray flex flex-col gap-4 rounded-2xl border-[1px] p-4">
      {/* USER CARD */}
      <div className="flex items-center justify-between">
        {/* IMAGE AND USER INFO */}
        <div className="flex items-center gap-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image
              src="/general/scriptCover.jpg"
              alt="John Doe"
              width={100}
              height={100}
              className="object-cover"
            />
          </div>

          <div className="">
            <h1 className="text-md font-bold">John Doe</h1>

            <span className="text-textGray text-sm">@johnDoe</span>
          </div>
        </div>

        {/* BUTTON */}
        <button className="cursor-pointer rounded-full bg-white px-4 py-1 font-semibold text-black">
          Follow
        </button>
      </div>

      <div className="flex items-center justify-between">
        {/* IMAGE AND USER INFO */}
        <div className="flex items-center gap-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image
              src="/general/scriptCover.jpg"
              alt="John Doe"
              width={100}
              height={100}
              className="object-cover"
            />
          </div>

          <div className="">
            <h1 className="text-md font-bold">John Doe</h1>

            <span className="text-textGray text-sm">@johnDoe</span>
          </div>
        </div>

        {/* BUTTON */}
        <button className="cursor-pointer rounded-full bg-white px-4 py-1 font-semibold text-black">
          Follow
        </button>
      </div>

      <div className="flex items-center justify-between">
        {/* IMAGE AND USER INFO */}
        <div className="flex items-center gap-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image
              src="/general/scriptCover.jpg"
              alt="John Doe"
              width={100}
              height={100}
              className="object-cover"
            />
          </div>

          <div className="">
            <h1 className="text-md font-bold">John Doe</h1>

            <span className="text-textGray text-sm">@johnDoe</span>
          </div>
        </div>

        {/* BUTTON */}
        <button className="cursor-pointer rounded-full bg-white px-4 py-1 font-semibold text-black">
          Follow
        </button>
      </div>

      <Link href="/" className="text-iconBlue">
        Show More
      </Link>
    </div>
  );
};

export default Recommendations;
