import { ArrowLeft, ArrowRight, MoveLeft, MoveRight } from "lucide-react"
import Image from "next/image"

const HoveredCard1 = () => {
    return (
        <div className="w-full max-w-[600px] px-4 md:px-0">

            <div className="relative group flex min-h-[21rem] w-full rounded-[2rem] text-white overflow-visible" style={{ backgroundImage: "url('/images/cardBackground.png')", height: "100%", width: "100%", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="absolute bottom-0 left-12 w-[55%] h-full">
                    <Image src="/images/card1Hovered.png" alt="image" width={500} height={500} className="w-full h-full object-cover" />
                </div>
                <div className="absolute top-5 left-10">
                    <Image src="/images/wow.png" alt="wow" width={500} height={500} className="w-1/2" />
                </div>
                <div className="absolute bottom-5 right-1 ">
                    <Image src="/images/wow.png" alt="wow" width={500} height={500} className="w-1/2" />
                </div>
                <div className="absolute top-10 right-8">
                    <p className="text-white font-nohemi font-medium text-xl">Clarity unlocked— <br />stickers, sips, and skills<br /> all in one go!</p>
                </div>
                <div className="w-full flex justify-between items-center px-[-16px]">
                    <MoveLeft className="w-15 h-15 text-black bg-gray-100 rounded-full shadow-lg p-4 cursor-pointer" />
                    <MoveRight className="w-15 h-15 text-black bg-gray-100 rounded-full shadow-lg p-4 cursor-pointer" />
                </div>



            </div>
        </div>
    )
}

export default HoveredCard1