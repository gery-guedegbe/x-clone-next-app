"use client";

import QueryProvider from "@/providers/QueryProvider";
import "./globals.css";
import { PostProvider } from "@/context/PostContext";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryProvider>
      <PostProvider>
        <html lang="en" suppressHydrationWarning>
          <title>X-Clone</title>
          <body>{children}</body>
        </html>
      </PostProvider>
    </QueryProvider>
  );
}
