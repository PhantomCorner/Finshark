"use client";
import { useState } from "react";
import Image from "next/image";
export default function PromptCard({ post }) {
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5 item-center gap-3 cursor-pointer">
        <Image
          src={post.creator.image}
          alt="user_image"
          width={40}
          height={40}
          className="rounded-full object-contain"
        />
        <div className="flex flex-col">
          <h3>
            <p>{post.creator.username}</p>
            <p>{post.creator.email}</p>
          </h3>
        </div>
      </div>
    </div>
  );
}
