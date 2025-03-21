import React from "react";
import Post from "./Post";

type FeedProps = {
  posts: {
    id: number;
    desc: string;
    media?: string;
    mediaType?: "image" | "video";
  }[];
};

const Feed = ({ posts }: FeedProps) => {
  return (
    <div className="mt-4">
      {posts.length > 0 ? (
        posts.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <p className="text-textGray text-center">Aucun post pour l’instant.</p>
      )}
    </div>
  );
};

export default Feed;
