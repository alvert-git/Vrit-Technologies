import axios from "axios";
import PostList from "@/components/task-3/PostList";

const UserPostsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    let posts = [];
    let errorOccurred = false;

    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
        posts = response.data;
    } catch (err) {
        console.error("Error fetching posts:", err);
        errorOccurred = true;
    }

    return (
        <div className="bg-white min-h-screen w-full px-6 md:pl-[7rem] md:pt-[2rem] text-black">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-[#109E73] to-[#0d8a64] bg-clip-text text-transparent">
                    User {id}&apos;s Feed
                </h1>
                <PostList initialPosts={posts} serverError={errorOccurred} />
            </div>
        </div>
    );
};

export default UserPostsPage;