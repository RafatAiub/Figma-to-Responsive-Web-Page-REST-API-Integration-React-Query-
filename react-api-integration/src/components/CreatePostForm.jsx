// src/components/CreatePostForm.js
import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const createPost = async (newPost) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
    });
    if (!response.ok) throw new Error("Failed to create post");
    return response.json();
};

const CreatePostForm = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const queryClient = useQueryClient();
    const mutation = useMutation(createPost, {
        onSuccess: () => {
            queryClient.invalidateQueries(["posts"]); // Invalidate the posts cache
            alert("Post created successfully!");
            setTitle("");
            setBody("");
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({ title, body });
    };

    return (
        <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4">Create New Post</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="mb-2 p-2 w-full border rounded"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    className="mb-4 p-2 w-full border rounded"
                    placeholder="Body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="p-2 bg-blue-500 text-white rounded"
                    disabled={mutation.isLoading}
                >
                    {mutation.isLoading ? "Creating..." : "Create Post"}
                </button>
            </form>
        </div>
    );
};

export default CreatePostForm;