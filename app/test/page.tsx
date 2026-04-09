
import FeatureCard from "@/components/common/FeaturedCard";

const cardData = [
    {
        title: "Start with Clarity",
        subtitle: "Step into a better learning path.",
        description: "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start.",
        bgColor: "bg-[#F45B5B]",
        imgSrc: "/images/person1.png",
        align: "left"
    },
    {
        title: "Learn by Doing",
        subtitle: "Practical skills, real projects.",
        description: "Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects help you build.",
        bgColor: "bg-[#5492A0]",
        imgSrc: "/images/person2.png",
        align: "right"
    },
    {
        title: " Get Mentored & Supported",
        subtitle: "Practical skills, real projects.",
        description: "Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects help you build.",
        bgColor: "bg-[#5492A0]",
        imgSrc: "/images/person3.png",
        align: "left"
    },
    // ... add 3 and 4 here
];

const Task2 = () => {
    return (
        <div className="bg-white min-h-screen w-full px-6 md:pl-[7rem] md:pt-[5rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-8">
                {cardData.map((card, index) => (
                    <FeatureCard key={index} {...card} />
                ))}
            </div>
        </div>
    );
};

export default Task2;