import React from "react";
import Image from "./Image";

const Search = () => {
  return (
    <div className="bg-inputGray flex items-center gap-4 rounded-full px-4 py-2">
      <Image path="icons/explore.svg" alt="search" w={16} h={16} />

      <input
        type="text"
        placeholder="Search"
        className="placeholder:text-textGray bg-transparent outline-none"
      />
    </div>
  );
};

export default Search;
