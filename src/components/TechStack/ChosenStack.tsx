import { RxCross1 } from "react-icons/rx"
import type { ChosenStackProps } from "../../types"

const ChosenStack = ({stack, handleSelectedStack}: ChosenStackProps) => {
    return (
            <div className="flex justify-between items-center outline-2  p-3 mb-3 rounded-lg outline-gray-200 md:p-2">
                <div className="flex items-center justify-start gap-3">
                    <img className="w-8 block" src={stack.icon} alt={stack.name} />
                    <div className="flex flex-col">
                        <h4 className="text-lg font-bold md:text-[13px]">{stack.name}</h4>
                        <p className="text-xs text-[#94A3B8] md:text-[12px]">{stack.category}</p>
                    </div>
                </div>
                <button className="cursor-pointer transition-all duration-200 hover:text-gray-400" 
                onClick={() => handleSelectedStack(stack,true)}><RxCross1 /></button>

            </div>
    )
}

export default ChosenStack
