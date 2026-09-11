import { MdStar } from "react-icons/md"
import type { TechProps } from "../../types"
import { useState } from "react";

const Tech = ({technology, selectedStack, handleSelectedStack}: TechProps) => {
    const stackStyle ={backgroundColor: `${technology.color}33`, 
    color: `${technology.color}`};
    let [isSelected, setIsSelected] = useState(false);
    isSelected = selectedStack.some(t => t.id === technology.id);
    const handleSelect = () => {
        if(!isSelected) {
            setIsSelected(!isSelected);
            handleSelectedStack(technology, isSelected);
        }
    }

    return (
        <>
            <div className="flex flex-col outline p-4 outline-gray-200 rounded-xl gap-4">
                
                {/* Logo Name badge */}
                <div className="flex justify-between items-center
                md:items-start">
                    <div className="flex  items-center gap-4
                    md:flex-col md:items-start">
                        <img className="w-10" src={technology.icon} alt="" />
                        <h3 className="text-sm font-bold
                        md:text-lg">{technology.name}</h3>
                    </div>

                    <p style={stackStyle} className="font-bold rounded-full px-3 py-0.5 text-sm">{technology.badge}</p>
                </div>

                <p className="text-[#4B5563] min-h-30">{technology.description}</p>

                <div className=" bg-[#F3F4F6] w-full h-0.5"/>

                <div className="flex justify-between items-center text-[#667488] text-[10px] lg:text-sm">
                    <p className="bg-slate-50 rounded-md px-2 py-0.5">{technology.category}</p>
                    <p>{technology.difficulty}</p>
                    <div className="flex items-center gap-1 text-amber-500">
                        <MdStar />
                        <p>{technology.rating}</p>
                    </div>
                </div>


                <button className={`${!isSelected ? " bg-black text-white cursor-pointer" : "bg-gray-300 text-gray-800 font-bold cursor-not-allowed"}  rounded-lg py-2 w-[97%] mx-auto`}
                onClick={handleSelect} disabled={isSelected}>{!isSelected ? "Add to Stack": "Added"}</button>
            </div>
        </>
    )
}

export default Tech
