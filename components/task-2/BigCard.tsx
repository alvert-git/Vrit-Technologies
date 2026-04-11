"use client";
import { motion } from "framer-motion";
import { MoveRight, Plus } from "lucide-react";
import Image from "next/image";

const BigCard = ({ id, title, number, subtitle, first_desc, sec_desc }: any) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative  w-full h-[461px] rounded-[32px] flex flex-col p-8 text-white overflow-hidden"
        >
            <motion.div
                layoutId={`circle-${id}`}
                className="absolute bottom-0 left-0 rounded-full bg-[#C33241] z-0"
                style={{ originX: 0, originY: 0 }}
                initial={{
                    width: "0%",
                    height: "0%",
                    opacity: 0,
                }}
                animate={{
                    width: "250%",
                    height: "250%",
                    bottom: "-100%",
                    left: "-100%",
                    opacity: 1,
                }}
                transition={{
                    duration: 1,
                    ease: [0.4, 0, 0.2, 1]
                }}
            />
            <div className="flex items-center justify-end gap-2 z-10">
                <p className="text-lg font-normal">{title}</p>
                <MoveRight />
            </div>

            <div className="flex items-center justify-center gap-4 mt-auto z-10">
                <Image src="/images/react.png" alt="React" width={100} height={100} />
                <Image src="/images/likes.png" alt="Likes" width={100} height={100} />
                <Image src="/images/vue.png" alt="Vue" width={100} height={100} />
                <Image src="/images/sketch.png" alt="Sketch" width={100} height={100} />
            </div>

            <div className="w-[95%] mt-auto mx-auto flex items-center gap-10 font-nohemi z-10">
                <motion.h1 layoutId={`num-${id}`} className="relative text-9xl font-black leading-none">
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
