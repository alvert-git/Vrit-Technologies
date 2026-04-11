"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Zod Schema for Validation
const postSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(100, "Title is too long"),
  body: z.string().min(10, "Body must be at least 10 characters").max(500, "Body is too long"),
});

type PostFormValues = z.infer<typeof postSchema>;

interface AddPostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (post: { title: string; body: string }) => void;
}

export default function AddPostModal({ isOpen, onClose, onAdd }: AddPostModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PostFormValues>({
    resolver: zodResolver(postSchema),
  });

  const onSubmit = (data: PostFormValues) => {
    onAdd(data);
    reset();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-lg overflow-hidden border border-gray-100"
          >
            <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <div>
                <h2 className="text-2xl font-black text-gray-900">Add New Post</h2>
                <p className="text-gray-500 text-sm mt-1">Share your thoughts with the community.</p>
              </div>
              <button 
                onClick={onClose} 
                className="p-2 hover:bg-gray-200 rounded-full transition-all duration-300 text-gray-400 hover:text-gray-900"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 ml-1">Title</label>
                <input
                  {...register("title")}
                  className={`w-full p-4 rounded-2xl border ${errors.title ? 'border-red-500 bg-red-50/10' : 'border-gray-200 bg-gray-50/30'} focus:ring-4 focus:ring-[#109E73]/10 focus:border-[#109E73] outline-none transition-all duration-300 placeholder:text-gray-400`}
                  placeholder="What's this about?"
                />
                {errors.title && (
                  <motion.p 
                    initial={{ opacity: 0, x: -10 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    className="text-red-500 text-xs font-medium ml-1"
                  >
                    {errors.title.message}
                  </motion.p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 ml-1">Body Content</label>
                <textarea
                  {...register("body")}
                  rows={5}
                  className={`w-full p-4 rounded-2xl border ${errors.body ? 'border-red-500 bg-red-50/10' : 'border-gray-200 bg-gray-50/30'} focus:ring-4 focus:ring-[#109E73]/10 focus:border-[#109E73] outline-none transition-all duration-300 resize-none placeholder:text-gray-400`}
                  placeholder="Type your message here..."
                />
                {errors.body && (
                  <motion.p 
                    initial={{ opacity: 0, x: -10 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    className="text-red-500 text-xs font-medium ml-1"
                  >
                    {errors.body.message}
                  </motion.p>
                )}
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-4 px-6 rounded-2xl font-bold text-gray-600 hover:bg-gray-100 transition-all duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-[2] bg-gradient-to-br from-[#109E73] to-[#0d8a64] hover:from-[#0d8a64] hover:to-[#096a4d] text-white font-bold py-4 px-6 rounded-2xl shadow-xl shadow-[#109E73]/20 hover:shadow-[#109E73]/30 transition-all duration-300 active:scale-[0.98]"
                >
                  Publish Post
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
