"use client";

import QueryProvider from "@/providers/QueryProvider";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { PostProvider } from "@/context/PostContext";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <QueryProvider>
        <PostProvider>
          <html lang="en" suppressHydrationWarning>
            <body>{children}</body>
          </html>
        </PostProvider>
      </QueryProvider>
    </ClerkProvider>
  );
}
