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
    
    const mutation = useMutation({
        mutationFn: createPost,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["posts"] });
            alert("Post created successfully!");
            setTitle("");
            setBody("");
        },
        onError: (error) => {
            alert(`Error creating post: ${error.message}`);
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({ title, body });
    };

    return (
        <div className="space-y-6">
            <div className="border-b border-gray-100 pb-4">
                <h2 className="text-2xl font-bold text-gray-900">Create New Post</h2>
                <p className="text-gray-500 text-sm mt-1">Share your thoughts with the community.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-1">
                        Post Title
                    </label>
                    <input
                        id="title"
                        type="text"
                        className="block w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 sm:text-sm"
                        placeholder="Enter a catchy title..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                
                <div>
                    <label htmlFor="body" className="block text-sm font-semibold text-gray-700 mb-1">
                        Content
                    </label>
                    <textarea
                        id="body"
                        rows="4"
                        className="block w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 sm:text-sm"
                        placeholder="Write your post content here..."
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white transition-all duration-200 ${
                        mutation.isPending 
                        ? "bg-blue-400 cursor-not-allowed" 
                        : "bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 active:transform active:scale-[0.98]"
                    }`}
                    disabled={mutation.isPending}
                >
                    {mutation.isPending ? (
                        <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Creating Post...
                        </span>
                    ) : "Create Post"}
                </button>
            </form>
        </div>
    );
};

export default CreatePostForm;