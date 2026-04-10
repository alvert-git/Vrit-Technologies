"use client";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const SmallCard = ({ number, subtitle, first_desc, sec_desc }: any) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-[#F9EBEC] w-full h-[461px] rounded-[32px] flex flex-col p-8 text-[#C33241] overflow-hidden"
        >
            <div className="mt-auto -rotate-90 translate-y-[-20px]">
                <h1 className="font-black text-4xl mb-2">{subtitle}</h1>
                <p className="text-lg font-medium text-black opacity-60">{first_desc}</p>
            </div>

            <div className="mt-auto mx-auto pb-2">
                <motion.h1 layoutId="big-num" className="relative text-9xl font-black leading-none">
                    {number}
                    <Plus className="absolute w-10 h-10 -top-2 -right-8" />
                </motion.h1>
            </div>
        </motion.div>
    );
};
export default SmallCard;