import React from "react";

const PostDetailModal = ({ post, onClose }) => {
    return (
        <div
            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
            onClick={onClose}
        >
            <div className="bg-white p-4 rounded-lg max-w-md w-full" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p>{post.body}</p>
                <button
                    className="mt-4 p-2 bg-red-500 text-white rounded"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default PostDetailModal;