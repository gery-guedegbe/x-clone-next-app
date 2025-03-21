"use client";

import Link from "next/link";
import { useState } from "react";

const Logout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="xxl:block relative hidden">
      <div
        className="cursor-pointer font-bold"
        onClick={() => setOpen((prev) => !prev)}
      >
        ...
      </div>

      {open && (
        <div className="absolute bottom-4 left-4 flex w-max flex-col gap-2 rounded-xl bg-white px-8 py-6">
          <Link
            href="/profile"
            className="text-textGray text-sm"
            onClick={() => setOpen(false)}
          >
            User Profile
          </Link>

          <Link
            href="/profile"
            className="text-textGray text-sm"
            onClick={() => setOpen(false)}
          >
            Saved Posts
          </Link>

          <Link
            href="/profile"
            className="text-textGray text-sm"
            onClick={() => setOpen(false)}
          >
            Settings
          </Link>

          <hr />

          <button
            className="cursor-pointer rounded-md bg-black px-2 py-1"
            onClick={() => (window.location.href = "/sign-in")}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Logout;
