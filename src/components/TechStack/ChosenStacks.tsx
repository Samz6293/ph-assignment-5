import type { ChosenStacksProps } from "../../types"
import ChosenStack from "./ChosenStack"

const ChosenStacks = ({selectedStack, handleSelectedStack, handleClear}: ChosenStacksProps) => {
    return (
        <>
            <div className="flex flex-col outline p-4 outline-gray-200 rounded-xl gap-4 h-fit 
            md:min-w-47.5 md:w-1/3">
                <div className="text-start">
                    <h3 className="font-bold">Your Stack</h3>
                    {selectedStack.length === 0 && <p className="text-xs text-[#667488] font-light sm:text-sm">No technologies selected yet.</p>}
                    {selectedStack.length === 1 && <p className="text-xs text-[#667488] font-light sm:text-sm">1 Technology Selected</p>}
                    {selectedStack.length > 1 && <p className="text-xs text-[#667488] font-light sm:text-sm">{selectedStack.length} Technologies Selected</p>}
                </div>
                <div className="w-full">
                    {selectedStack.length === 0 ?
                    <p className="p-6 font-extralight text-center text-xs text-[#667488] outline outline-gray-300 rounded-lg outline-dashed">Your stack is empty</p>
                    :
                    selectedStack.map(stack => <ChosenStack key={stack.id} stack={stack} handleSelectedStack={handleSelectedStack}/>
                    )
                    }
                    <button className={`${selectedStack.length === 0 && "hidden"} text-red-500 text-sm font-bold w-full outline rounded-lg py-2 mt-13 cursor-pointer`}
                    onClick={() => handleClear(true)}>Remove All</button>
                </div>
            </div>
        </>
    )
}

export default ChosenStacks
