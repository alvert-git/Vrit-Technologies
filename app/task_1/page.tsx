// import Card1 from "@/components/task-1/Card1";
import Card2 from "@/components/task-1/Card2";
import Card3 from "@/components/task-1/Card3";
import Card4 from "@/components/task-1/Card4";
import InteractiveCard1 from "@/components/task-1/interactive/InteractiveCard1";
import InteractiveCard2 from "@/components/task-1/interactive/InteractiveCard2";

const Task1 = () => {
  return (
    <>
      <div className="bg-white min-h-screen w-full px-6 md:pl-[7rem] md:pt-[2rem]">
        <h2 className="text-[#414141] font-medium text-2xl mb-4">
          Your SkillShikshya Journey
        </h2>
        <h1 className="text-[#414141] font-bold text-[32px] leading-[120%] tracking-normal font-nohemi">
          <span className="text-[#109E73]">Step</span> In.{" "}
          <span className="text-[#109E73]">Skill</span> Up.{" "}
          <span className="text-[#109E73]">Stand</span> Out. 🚀
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-8">
          <InteractiveCard1 />
          <InteractiveCard2 />
          <Card3 />
          <Card4 />
        </div>
      </div>

    </>
  );
};

export default Task1;