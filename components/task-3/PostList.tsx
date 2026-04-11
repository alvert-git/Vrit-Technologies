"use client";
import { useState, useMemo } from "react";
import { Search, Plus, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import AddPostModal from "./AddPostModal";
import { Post } from "@/types";

export default function PostList({ initialPosts, serverError }: { initialPosts: Post[], serverError: boolean }) {
    const [posts, setPosts] = useState<Post[]>(initialPosts);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const postsPerPage = 6;

    const filteredPosts = useMemo(() => {
        return posts.filter(post =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.body.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [posts, searchQuery]);

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const currentPosts = useMemo(() => {
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        return filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    }, [filteredPosts, currentPage]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    const handleAddPost = (newPost: { title: string; body: string }) => {
        const postToAdd: Post = {
            id: Date.now(),
            userId: 1,
            ...newPost
        };
        setPosts([postToAdd, ...posts]);
        setCurrentPage(1);
    };

    if (serverError) return (
        <div className="p-6 border border-red-100 bg-red-50 rounded-xl text-center">
            <p className="text-red-600 text-sm font-medium">Could not load posts. Please try again later.</p>
        </div>
    );

    return (
        <div className="max-w-6xl mx-auto py-6">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search posts..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#109E73]/20 focus:border-[#109E73] outline-none transition-all text-gray-700"
                    />
                </div>

                <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#109E73] hover:bg-[#0d8a64] text-white font-medium py-3 px-6 rounded-xl transition-all shadow-sm active:scale-95"
                >
                    <Plus className="w-5 h-5" />
                    New Post
                </button>
            </div>

            {/* Simple Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                {currentPosts.length > 0 ? (
                    currentPosts.map((post: Post) => (
                        <div
                            key={post.id}
                            className="p-6 border border-gray-200 rounded-xl bg-white hover:border-[#109E73] transition-colors flex flex-col h-full"
                        >
                            <div className="flex items-center gap-2 mb-4 text-[#109E73]">
                                <MessageSquare className="w-4 h-4" />
                                <span className="text-[10px] font-bold uppercase tracking-wider">Post ID: {post.id}</span>
                            </div>
                            <h2 className="text-lg font-semibold capitalize mb-2 text-gray-900 line-clamp-2">
                                {post.title}
                            </h2>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-4">
                                {post.body}
                            </p>
                            <button className="text-xs font-semibold text-[#109E73] hover:text-[#0d8a64] flex items-center gap-1 mt-auto transition-colors">
                                Read full story
                                <ChevronRight className="w-3 h-3" />
                            </button>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center py-16 border border-dashed border-gray-200 rounded-xl bg-gray-50">
                        <p className="text-gray-400 text-sm">No posts found matching your search.</p>
                    </div>
                )}
            </div>
            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-3">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(prev => prev - 1)}
                        className="p-2 border border-gray-200 text-gray-500 rounded-lg hover:border-[#109E73] hover:text-[#109E73] transition-all disabled:opacity-30 disabled:pointer-events-none"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div className="flex gap-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${currentPage === page
                                    ? 'bg-[#109E73] text-white'
                                    : 'text-gray-500 border border-gray-100 hover:border-[#109E73]'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>

                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(prev => prev + 1)}
                        className="p-2 border border-gray-200 text-gray-500 rounded-lg hover:border-[#109E73] hover:text-[#109E73] transition-all disabled:opacity-30 disabled:pointer-events-none"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            )}

            <AddPostModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAdd={handleAddPost}
            />
        </div>
    );
}