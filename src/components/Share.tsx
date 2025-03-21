"use client";
import React, { useState } from "react";
import Image from "next/image";
import NextImage from "next/image";

type ShareProps = {
  addPost: (newPost: {
    id: number;
    desc: string;
    media?: string;
    mediaType?: "image" | "video";
  }) => void;
};

const Share = ({ addPost }: ShareProps) => {
  const [desc, setDesc] = useState("");
  const [media, setMedia] = useState<File | null>(null);

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!desc.trim() && !media) return; // Empêche d'envoyer un post vide

    const mediaType: "image" | "video" | undefined = media?.type.includes(
      "image",
    )
      ? "image"
      : media?.type.includes("video")
        ? "video"
        : undefined;

    const newPost = {
      id: Date.now(),
      desc,
      media: media ? URL.createObjectURL(media) : undefined,
      mediaType, // Assuré d'être de type "image" | "video" | undefined
    };

    addPost(newPost); // Envoie le post au `HomePage`
    setDesc(""); // Réinitialisation du champ texte
    setMedia(null); // Réinitialisation du média
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 p-4">
      {/* Avatar */}
      <div className="relative h-10 w-10 overflow-hidden rounded-full">
        <Image
          src="/general/profile.png"
          alt="Avatar"
          width={100}
          height={100}
        />
      </div>

      {/* Champ de saisie */}
      <div className="flex flex-1 flex-col gap-4">
        <input
          type="text"
          name="desc"
          placeholder="Que se passe-t-il ?!"
          className="placeholder:text-textGray bg-transparent text-xl outline-none"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        {/* Aperçu du média */}
        {media && (
          <div className="relative overflow-hidden rounded-xl">
            {media.type.includes("image") ? (
              <NextImage
                src={URL.createObjectURL(media)}
                alt="Aperçu"
                width={600}
                height={600}
                className="w-full object-contain"
              />
            ) : (
              <video
                src={URL.createObjectURL(media)}
                controls
                className="w-full rounded-lg"
              />
            )}
            <button
              onClick={() => setMedia(null)}
              className="absolute top-2 right-2 rounded-full bg-black/50 px-2 py-1 text-white"
            >
              X
            </button>
          </div>
        )}

        {/* Boutons */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4">
            {" "}
            <input
              type="file"
              name="file"
              onChange={handleMediaChange}
              className="hidden"
              id="file"
              accept="image/*,video/*"
            />
            <label htmlFor="file" className="cursor-pointer">
              <Image
                src="/icons/image.svg"
                alt="Ajouter une image"
                width={20}
                height={20}
              />
            </label>
            <Image
              src="/icons/gif.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="/icons/poll.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="/icons/emoji.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="/icons/schedule.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="/icons/location.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>

          <button
            type="submit"
            className="cursor-pointer rounded-full bg-white px-4 py-2 font-bold text-black"
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default Share;
