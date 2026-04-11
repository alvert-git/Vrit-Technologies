"use client";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const SmallCard = ({ id, number, subtitle, first_desc, sec_desc, isActive }: any) => {
    return (
        <motion.div
            layout
            className="relative bg-[#F9EBEC] w-full h-[461px] rounded-[32px] flex flex-col p-8 text-[#C33241] overflow-hidden cursor-pointer"
        >

            <motion.div
                className="flex flex-col items-center justify-center mt-auto origin-center -rotate-90"
                animate={{
                    y: -20,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                <h1 className="font-black text-4xl mb-2">{subtitle}</h1>
                <p className="text-lg font-medium text-black opacity-60">{first_desc}<br />{sec_desc}</p>
            </motion.div>

            <div className="mt-auto mx-auto pb-2">
                <motion.h1 layoutId={`num-${id}`} className="relative text-9xl font-black leading-none">
                    {number}
                    <Plus className="absolute w-10 h-10 -top-2 -right-8" />
                </motion.h1>
            </div>
        </motion.div>
    );
};
export default SmallCard;
