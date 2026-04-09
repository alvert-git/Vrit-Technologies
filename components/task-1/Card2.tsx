const Card2 = () => {
    return (
        <div className="w-full max-w-[600px] px-4">

            <div className="relative group flex min-h-[21rem] w-full rounded-[2rem] bg-[#5492A0] text-white overflow-visible">

                <div className="absolute right-[1%] w-[45%] h-auto z-10 select-none pointer-events-none">
                    <img
                        src="/images/person2.png"
                        alt="person"
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="flex flex-col justify-center  w-[65%] md:w-[60%] pl-10 py-8 text-left z-20">
                    <h2 className="text-[2rem] lg:text-[2brem] font-bold leading-tight mb-2 font-nohemi text-left">
                        Learn by Doing
                    </h2>
                    <p className="text-[1.5rem] lg:text-[1.25rem] font-medium mb-4 leading-snug">
                        Practical skills, real projects.
                    </p>
                    <p className="text-[0.85rem] lg:text-[0.95rem] opacity-90 leading-tight">
                        Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Card2;