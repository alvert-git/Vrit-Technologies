
const Card3 = () => {
    return (
        <div className="w-full max-w-[600px] px-4 md:px-0">

            <div className="relative group flex min-h-[21rem] w-full rounded-[2rem] bg-[#6C64A8] text-white overflow-visible">
                <div className="absolute left-[-10%] bottom-[-15%] w-[55%] h-auto z-10 select-none pointer-events-none">
                    <img
                        src="/images/person3.png"
                        alt="person"
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="flex flex-col justify-center ml-auto w-[65%] md:w-[65%] pr-10 pl-4 py-8 text-right z-20">
                    <h2 className="text-[1.5rem] lg:text-[2brem] font-bold leading-tight mb-2 font-nohemi  text-right">
                        Get Mentored & Supported
                    </h2>
                    <p className="text-[1.5rem] lg:text-[1.25rem] font-medium mb-4 leading-snug">
                        You're not learning alone.
                    </p>
                    <p className="text-[0.85rem] text-right lg:text-[0.95rem] opacity-90 leading-tight">
                        Stuck or need feedback? SkillShikshya’s community of mentors and learners has your back with live support, interactive discussions, and expert insights. You’re never on your own.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Card3