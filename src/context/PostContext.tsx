"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Type des posts
type Post = {
  id: number;
  desc: string;
  media?: string;
  mediaType?: "image" | "video";
};

// Type pour le contexte
type PostContextType = {
  posts: Post[];
  addPost: (newPost: Post) => void;
};

// Créer le contexte
const PostContext = createContext<PostContextType | undefined>(undefined);

// Hook personnalisé pour utiliser le contexte
export const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePostContext must be used within a PostProvider");
  }
  return context;
};

// Provider
export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  // Ajouter un post
  const addPost = (newPost: Post) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <PostContext.Provider value={{ posts, addPost }}>
      {children}
    </PostContext.Provider>
  );
};
