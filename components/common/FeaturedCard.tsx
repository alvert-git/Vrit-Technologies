import Image from "next/image";

// components/task-1/FeatureCard.jsx
const FeatureCard = ({
    title, subtitle, description, bgColor, imgSrc, align = "left"
}: {
    title: string;
    subtitle: string;
    description: string;
    bgColor: string;
    imgSrc: string;
    align: string;
}) => {
    const isRight = align === "right";

    return (
        <div className="w-full max-w-[600px]">
            <div className={`relative flex min-h-[21rem] w-full rounded-[2rem] ${bgColor} text-white overflow-visible`}>

                <div className={`absolute bottom-[-20%] w-[50%] h-auto z-10 pointer-events-none 
          ${isRight ? "right-[-5%]" : "left-[-10%]"}`}>
                    <Image src={imgSrc} alt={title} width={500} height={500} className="w-full h-full object-contain" />
                </div>
                <div className={`flex flex-col justify-center w-[65%] py-8 z-20 px-6 md:px-10
          ${isRight ? "mr-auto text-left" : "ml-auto text-right"}`}>
                    <h2 className="text-[2rem] font-bold leading-tight mb-2 font-nohemi">
                        {title}
                    </h2>
                    <p className="text-[1.25rem] font-medium mb-4 leading-snug">
                        {subtitle}
                    </p>
                    <p className="text-[0.95rem] opacity-90 leading-tight">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;