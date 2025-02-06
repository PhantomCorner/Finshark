"use client";
import { useState, useEffect } from "react";
import { useSession } from "@node_modules/next-auth/react";
import { useRouter } from "@node_modules/next/router";
import Profile from "../components/Profile";
const ProfilePage = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // fetch prompts
    const fetchPosts = async () => {
      const res = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await res.json();
      setPosts(data);
    };
    if (session?.user.id) {
      fetchPosts();
    }
  }, [session]);

  const handleDelete = (item) => {
    console.log("delete", item._id);
  };
  const handleEdit = (item) => {
    console.log("edit", item._id);
  };
  return (
    <div>
      <Profile
        name={session?.user?.name}
        desc="Welcome"
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default ProfilePage;
