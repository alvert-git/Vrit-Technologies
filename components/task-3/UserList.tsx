"use client";
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useAppStore } from '@/store/useAppStore';
import { Search, Mail, Building2, ChevronRight, Loader2 } from 'lucide-react';
import { User } from '@/types';

interface UserListProps {
    initialUsers: User[];
    serverError: boolean;
}
export default function UserList({ initialUsers, serverError }: UserListProps) {
    const { users, setUsers, apiIsLoading, setError, error } = useAppStore();
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        if (serverError) {
            setError("Something went wrong while fetching users.");
        } else {
            setUsers(initialUsers);
        }
    }, [initialUsers, setUsers, serverError, setError]);

    const filteredUsers = useMemo(() => {
        return users.filter(user =>
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [users, searchQuery]);

    if (apiIsLoading) return (
        <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-[#109E73] animate-spin mb-2" />
            <p className="text-sm text-gray-500">Loading users...</p>
        </div>
    );

    if (error) return (
        <div className="p-6 border border-red-100 bg-red-50 rounded-lg text-center">
            <p className="text-red-600 text-sm">{error}</p>
        </div>
    );

    return (
        <div className="max-w-6xl mx-auto py-6">
            {/* Simple Search Bar */}
            <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                    type="text"
                    placeholder="Search by name or email..."
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#109E73]/20 focus:border-[#109E73] outline-none transition-all text-gray-700"
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* Simple Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                        <div
                            key={user.id}
                            className="group p-5 border border-gray-200 rounded-xl bg-white hover:border-[#109E73] transition-colors flex flex-col justify-between"
                        >
                            <div>
                                <h2 className="font-semibold text-lg text-gray-900 mb-1">
                                    {user.name}
                                </h2>
                                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                                    <Mail className="w-4 h-4" />
                                    <span>{user.email}</span>
                                </div>

                                <div className="flex items-center gap-2 text-gray-600 text-xs py-1 px-2 bg-gray-100 w-fit rounded-md mb-6">
                                    <Building2 className="w-3.5 h-3.5" />
                                    <span>{user.company.name}</span>
                                </div>
                            </div>

                            <Link href={`/task_3/users/${user.id}`}>
                                <button className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-[#109E73] border border-[#109E73]/20 rounded-lg hover:bg-[#109E73] hover:text-white transition-all">
                                    View Posts
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </Link>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center py-12 border border-dashed border-gray-200 rounded-xl">
                        <p className="text-gray-400 text-sm">No results found.</p>
                    </div>
                )}
            </div>
        </div>
    );
}