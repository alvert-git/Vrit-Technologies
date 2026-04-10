"use client";
import { motion } from "framer-motion";
import { MoveRight, Plus } from "lucide-react";
import Image from "next/image";

const BigCard = ({ title, number, subtitle, first_desc, sec_desc }: any) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-[#C33241] w-full h-[461px] rounded-[32px] flex flex-col p-8 text-white"
        >
            <div className="flex items-center justify-end gap-2">
                <p className="text-lg font-normal">{title}</p>
                <MoveRight />
            </div>

            <div className="flex items-center justify-center gap-4 mt-auto">
                <Image src="/images/react.png" alt="React" width={100} height={100} />
                <Image src="/images/likes.png" alt="Likes" width={100} height={100} />
                <Image src="/images/vue.png" alt="Vue" width={100} height={100} />
                <Image src="/images/sketch.png" alt="Sketch" width={100} height={100} />
            </div>

            <div className="w-[95%] mt-auto mx-auto flex items-center gap-10 font-nohemi">
                <motion.h1 layoutId="big-num" className="relative text-9xl font-black leading-none">
                    {number}
                    <Plus className="absolute w-10 h-10 -top-2 -right-8" />
                </motion.h1>
                <div className="">
                    <h2 className="text-4xl font-black mb-2">{subtitle}</h2>
                    <p className="text-lg font-medium leading-tight font-sans">{first_desc}<br />{sec_desc}</p>
                </div>
            </div>
        </motion.div>
    );
};
export default BigCard;