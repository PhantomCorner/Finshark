"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Form from "../components/Form";
export default function Page() {
  const [submit, setSubmit] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });
  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmit(true);
    console.log(post);
  };
  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submit={submit}
      handleSubmit={createPrompt}
    />
  );
}
