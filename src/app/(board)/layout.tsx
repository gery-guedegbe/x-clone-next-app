"use client";

import LeftBar from "@/components/LeftBar";
import "../globals.css";
import RightBar from "@/components/RightBar";
import { ClerkProvider } from "@clerk/nextjs";

export default function BoradLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <div className="xxl:max-w-screen-xxl mx-auto flex max-w-screen-md justify-between lg:max-w-screen-lg xl:max-w-screen-xl">
        <div className="xsm:px-4 xxl:px-8 px-2">
          <LeftBar />
        </div>

        <div className="border-borderGray flex-1 border-x-[1px] lg:min-w-[600px]">
          {children}
          {modal}
        </div>

        <div className="bg-blue ml-4 hidden flex-1 md:ml-8 lg:flex">
          <RightBar />
        </div>
      </div>
    </ClerkProvider>
  );
}
