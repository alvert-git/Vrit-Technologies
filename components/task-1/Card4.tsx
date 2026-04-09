"use client"
import Image from "next/image";
import { useRef } from "react";
import { useFloatAnimation } from "../common/useFloatAnimation";

const Card4 = () => {
    const container = useRef<HTMLDivElement>(null);
    useFloatAnimation(container);
    return (
        <div className="w-full max-w-[600px] px-4">

            <div ref={container} className="relative group flex min-h-[21rem] w-full rounded-[2rem] bg-[#A88964] text-white overflow-visible">
                <div className="absolute image-main right-[-5%] bottom-[-10%] w-[55%] h-auto z-10 select-none pointer-events-none">
                    <Image
                        src="/images/person4.png"
                        alt="person"
                        width={500}
                        height={500}
                        className="w-full h-full object-contain"
                    />
                </div>

                <div className="flex flex-col justify-center  w-[65%] md:w-[65%] pl-10 py-8 text-left z-20">
                    <h2 className="text-[1.5rem] md:text-[1.75rem] lg:text-[2brem] font-bold leading-tight mb-2 font-nohemi text-left">
                        Achieve & Showcase
                    </h2>
                    <p className="text-[1.5rem] lg:text-[1.25rem] font-medium mb-4 leading-snug">
                        Build your portfolio, get job-ready.
                    </p>
                    <p className="text-[0.85rem] lg:text-[0.95rem] opacity-90 leading-tight">
                        Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Card4;