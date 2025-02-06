"use client";
import { useState } from "react";
import Image from "next/image";
export default function PromptCard({
  content,
  handleTagClick,
  handleEdit,
  handleDelete,
}) {
  const [copied, setCopied] = useState("");
  const handleCopy = () => {
    setCopied(content.prompt);
    navigator.clipboard.writeText(content.prompt);
    alert("content copied");
    setTimeout(() => {
      setCopied(""), 4000;
    });
  };
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5 item-center gap-3 cursor-pointer">
        <Image
          src={content.creator.image}
          alt="user_image"
          width={40}
          height={40}
          className="rounded-full object-contain"
        />
        <div className="flex flex-col">
          <h3>
            <p>{content.creator.username}</p>
            <p>{content.creator.email}</p>
          </h3>
          <p className="my-4 font-satoshi text-sm ">{content.prompt}</p>
          <p
            className="font-inter text-sm"
            onClick={() => {
              handleTagClick && handleTagClick(content.tag);
            }}
          >
            #{content.tag}
          </p>
        </div>
        <div className="copy_btn">
          <Image
            onClick={handleCopy}
            alt="copy_img"
            src={
              copied === content.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            width={12}
            height={12}
          />
        </div>
      </div>
      <p onClick={handleEdit}>edit</p>
      <p onClick={handleDelete}>delete</p>
    </div>
  );
}
