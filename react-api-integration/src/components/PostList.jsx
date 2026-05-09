import React from "react";

const PostList = ({ posts, onPostClick }) => {
    if (!posts || posts.length === 0) {
        return (
            <div className="p-12 text-center">
                <p className="text-gray-500 text-lg">No posts found matching your search.</p>
            </div>
        );
    }

    return (
        <div className="divide-y divide-gray-100">
            {posts.map((post) => (
                <div
                    key={post.id}
                    className="group p-5 hover:bg-blue-50 cursor-pointer transition-all duration-150 ease-in-out"
                    onClick={() => onPostClick(post)}
                >
                    <div className="flex items-center justify-between">
                        <div className="flex-1 pr-4">
                            <h3 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-150 line-clamp-1">
                                {post.title}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                                {post.body}
                            </p>
                        </div>
                        <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                            <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostList;