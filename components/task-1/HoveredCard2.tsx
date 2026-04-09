import { ArrowLeft, ArrowRight, MoveLeft, MoveRight } from "lucide-react"
import Image from "next/image"

const HoveredCard2 = ({ onNext }) => {
    return (
        <div className="w-full max-w-[600px] px-4 md:px-0">

            <div className="relative group flex min-h-[21rem] w-full rounded-[2rem] text-white overflow-visible" style={{ backgroundImage: "url('/images/cardBackground2.png')", height: "100%", width: "100%", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="absolute bottom-0 right-5 w-[80%] h-auto z-10">
                    <Image src="/images/card2Hovered.png" alt="image" width={500} height={500} className="w-full h-full object-cover" />
                </div>
                <div className="absolute top-10 left-10">
                    <p className="text-white font-nohemi font-medium text-xl">Focused faces—learning <br />mode: ON!</p>
                </div>
                <div className="w-full flex justify-between items-center px-[-16px] z-20">
                    <MoveLeft className="w-15 h-15 text-black bg-gray-100 rounded-full shadow-lg p-4 cursor-pointer" />
                    <MoveRight onClick={onNext} className="w-15 h-15 text-black bg-gray-100 rounded-full shadow-lg p-4 cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

export default HoveredCard2