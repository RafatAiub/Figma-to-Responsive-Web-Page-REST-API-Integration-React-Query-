import React from "react";

const PostList = ({ posts, onPostClick }) => {
    return (
        <div className="mb-4">
            <ul>
                {posts.map((post) => (
                    <li
                        key={post.id}
                        className="p-2 border-b cursor-pointer"
                        onClick={() => onPostClick(post)}
                    >
                        <h3 className="font-semibold">{post.title}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;