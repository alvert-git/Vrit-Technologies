"use client"
import Image from "next/image";
import { useRef } from "react";
import { useFloatAnimation } from "../common/useFloatAnimation";

const Card1 = () => {
    const container = useRef<HTMLDivElement>(null);
    useFloatAnimation(container);
    return (
        <div className="w-full max-w-[600px] px-4 md:px-0">

            <div ref={container} className="relative group flex min-h-[21rem] w-full rounded-[2rem] bg-[#F45B5B] text-white overflow-visible">

                <div className="absolute image-main left-[-10%] w-[55%] h-auto z-10 select-none pointer-events-none">
                    <Image
                        src="/images/person1.png"
                        alt="person"
                        width={500}
                        height={500}
                        className="w-full h-full object-contain"
                    />
                </div>

                <div className="flex flex-col justify-center ml-auto w-[65%] md:w-[65%] pr-10 pl-4 py-8 text-right z-20">
                    <h2 className="text-[2rem] lg:text-[2brem] font-bold leading-tight m-2 font-nohemi">
                        Start with Clarity
                    </h2>
                    <p className="text-[1.5rem] lg:text-[1.25rem] font-medium mb-4 leading-snug">
                        Step into a better learning path.
                    </p>
                    <p className="text-[0.85rem] text-right lg:text-[0.95rem] opacity-90 leading-tight">
                        Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Card1;