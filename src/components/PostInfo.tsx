import React from "react";
import Image from "next/image";

const PostInfo = () => {
  return (
    <div className="relative h-4 w-4 cursor-pointer">
      <Image src="/icons/infoMore.svg" alt="" height={16} width={16} />
    </div>
  );
};

export default PostInfo;
