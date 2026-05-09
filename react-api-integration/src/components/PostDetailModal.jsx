import React from "react";

const PostDetailModal = ({ post, onClose }) => {
    return (
        <div
            className="fixed inset-0 z-50 flex justify-center items-center p-4 sm:p-6"
            onClick={onClose}
        >
            {/* Backdrop with blur */}
            <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"></div>
            
            {/* Modal Content */}
            <div 
                className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden transform transition-all animate-in fade-in zoom-in duration-300" 
                onClick={(e) => e.stopPropagation()}
            >
                <div className="absolute top-4 right-4">
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="p-8">
                    <div className="flex items-center space-x-2 mb-6">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 uppercase tracking-wider">
                            Post Detail
                        </span>
                        <span className="text-gray-300">•</span>
                        <span className="text-sm text-gray-500 font-medium">ID: {post.id}</span>
                    </div>
                    
                    <h2 className="text-3xl font-extrabold text-gray-900 leading-tight mb-4">
                        {post.title}
                    </h2>
                    
                    <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed">
                        <p>{post.body}</p>
                    </div>

                    <div className="mt-10 flex justify-end">
                        <button
                            className="px-6 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 focus:ring-4 focus:ring-gray-200 transition-all active:scale-95"
                            onClick={onClose}
                        >
                            Close Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetailModal;