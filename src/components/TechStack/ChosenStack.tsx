import { RxCross1 } from "react-icons/rx"
import type { ChosenStackProps } from "../../types"

const ChosenStack = ({stack, handleSelectedStack}: ChosenStackProps) => {
    return (
            <div className="flex justify-between items-center outline-2 p-2 mb-2 rounded-lg outline-gray-200">
                <div className="flex items-center justify-start gap-3">
                    <img className="w-8 block" src={stack.icon} alt={stack.name} />
                    <div className="flex flex-col">
                        <h4 className="font-bold text-[13px]">{stack.name}</h4>
                        <p className="text-[12px] text-[#94A3B8]">{stack.category}</p>
                    </div>
                </div>
                <button className="cursor-pointer" 
                onClick={() => handleSelectedStack(stack,true)}><RxCross1 /></button>

            </div>
    )
}

export default ChosenStack
