import { create } from 'zustand';

interface AppState {
    users: any[];
    posts: any[];
    apiIsLoading: boolean;
    error: string | null;
    setUsers: (users: any[]) => void;
    setPosts: (posts: any[]) => void;
    setLoading: (isLoading: boolean) => void;
    setError: (error: string | null) => void;
}

export const useAppStore = create<AppState>((set) => ({
    users: [],
    posts: [],
    apiIsLoading: false,
    error: null,
    setUsers: (users) => set({ users, apiIsLoading: false }),
    setPosts: (posts) => set({ posts, apiIsLoading: false }),
    setLoading: (apiIsLoading) => set({ apiIsLoading }),
    setError: (error) => set({ error, apiIsLoading: false }),
}));