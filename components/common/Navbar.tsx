"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    const links = [
        { name: "Task 1", path: "/" },
        { name: "Task 2", path: "/task_2" },
        { name: "Task 3", path: "/task_3" },
    ];

    return (
        <nav className="w-full flex justify-center p-4 sticky top-0 z-[100] bg-white/70 backdrop-blur-md border-b border-gray-100/50">
            <div className="flex items-center gap-6 px-6 py-2">
                {links.map((link) => {
                    const isActive = pathname === link.path;

                    return (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={`text-md font-medium transition-all duration-300 ease-in-out hover:opacity-100 ${isActive
                                ? "text-[#109E73] opacity-100"
                                : "text-gray-500 opacity-60 hover:text-gray-900"
                                }`}
                        >
                            {link.name}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default Navbar;