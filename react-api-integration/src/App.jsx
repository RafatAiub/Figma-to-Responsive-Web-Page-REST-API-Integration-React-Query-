// src/App.js
import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import PostList from "./components/PostList";
import PostDetailModal from "./components/PostDetailModal";
import CreatePostForm from "./components/CreatePostForm";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Failed to fetch posts");
  return response.json();
};

const App = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [filter, setFilter] = useState("");
  const { data, error, isLoading } = useQuery(["posts"], fetchPosts, {
    staleTime: 60000, // Cache for 1 minute
    cacheTime: 900000, // Keep cache for 15 minutes
  });

  const filteredPosts = data?.filter((post) =>
    post.title.toLowerCase().includes(filter.toLowerCase())
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog Post Manager</h1>

      <input
        type="text"
        className="mb-4 p-2 border rounded"
        placeholder="Search posts by title"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <PostList posts={filteredPosts} onPostClick={setSelectedPost} />

      {selectedPost && (
        <PostDetailModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}

      <CreatePostForm />
    </div>
  );
};

export default App;