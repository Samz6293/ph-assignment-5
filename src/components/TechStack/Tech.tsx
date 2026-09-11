import { MdStar } from "react-icons/md"
import type { TechProps } from "../../types"

const Tech = ({technology}: TechProps) => {
    const stackStyle ={backgroundColor: `${technology.color}33`, 
    color: `${technology.color}`};

    return (
        <>
            <div className="flex flex-col outline p-4 outline-gray-200 rounded-xl gap-4">
                
                {/* Logo Name badge */}
                <div className="flex justify-between items-center">
                    <div className="flex  items-center gap-4">
                        <img className="w-10" src={technology.icon} alt="" />
                        <h3 className="text-sm font-bold">{technology.name}</h3>
                    </div>

                    <p style={stackStyle} className="font-bold rounded-full px-3 py-0.5">{technology.badge}</p>
                </div>

                <p className="text-[#4B5563] min-h-20">{technology.description}</p>

                <div className="flex justify-between items-center text-[#667488]">
                    <p className="bg-slate-100 rounded-md px-2 py-0.5">{technology.category}</p>
                    <p>{technology.difficulty}</p>
                    <div className="flex items-center gap-1 text-amber-500">
                        <MdStar />
                        <p>{technology.rating}</p>
                    </div>
                </div>


                <button className="bg-black text-white rounded-lg py-2 w-[97%] mx-auto cursor-pointer">Add to Stack</button>
            </div>
        </>
    )
}

export default Tech
