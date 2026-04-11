import axios from "axios";
import UserList from "@/components/task-3/UserList";

const Page = async () => {
    let initialUsers = [];
    let errorOccurred = false;

    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        initialUsers = response.data;
    } catch (err) {
        console.error("Error fetching users:", err);
        errorOccurred = true;
    }

    return (
        <div className="bg-white min-h-screen w-full px-6 md:pl-[7rem] md:pt-[2rem]">
            <h2 className="text-[#414141] font-medium text-2xl mb-4">
                Task-3 User & Posts Dashboard
            </h2>
            {/* Pass the data and the initial error state to the client component */}
            <UserList initialUsers={initialUsers} serverError={errorOccurred} />
        </div>
    );
};

export default Page;