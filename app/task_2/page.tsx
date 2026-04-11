"use client";
import { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import BigCard from "@/components/task-2/BigCard";
import SmallCard from "@/components/task-2/SmallCard";

const page = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const cardData = [
        { id: 0, title: "Start Now", number: "10", subtitle: "Web Design", first_desc: "Master the art of design", sec_desc: "Learn your portfolio." },
        { id: 1, title: "View More", number: "05", subtitle: "Upcoming Courses", first_desc: "exciting new courses", sec_desc: "waiting to boost your skills." },
        { id: 2, title: "Join Now", number: "08", subtitle: "Graphic Design", first_desc: "Create stunning visuals", sec_desc: "Build your brand." },
    ];
    return (
        <div className="bg-white min-h-screen w-full px-6 md:pl-[7rem] md:pt-[2rem]">
            <h2 className="text-[#414141] font-medium text-2xl mb-4">
                Explore our classes and master trending skills!
            </h2>
            <h1 className="text-[#414141] font-bold text-[32px] leading-[120%] tracking-normal font-nohemi">
                <span>Dive Into </span>{" "}
                <span className="text-[#109E73]">What’s Hot Right Now! 🔥</span>{" "}
            </h1>

            <LayoutGroup>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-10">
                    {cardData.map((card, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <motion.div
                                layout
                                key={card.id}
                                onClick={() => setActiveIndex(index)}
                                transition={{ type: "spring", stiffness: 180, damping: 28 }}
                                className={`cursor-pointer ${isActive ? "lg:col-span-2" : "lg:col-span-1"}`}
                            >
                                {isActive ? (
                                    <BigCard {...card} />
                                ) : (
                                    <SmallCard {...card} isActive={false} />
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </LayoutGroup>
        </div>
    )
}

export default page