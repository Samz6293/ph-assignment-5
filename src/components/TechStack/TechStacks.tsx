import { use } from "react"
import type { TechStackProps } from "../../types"
import Tech from "./Tech";

const TechStacks = ({technologiesPromise}: TechStackProps) => {
    const technologies = use(technologiesPromise);
    console.log(technologies);
    return (
        <>
            <section className="content-box-s flex flex-col items-center py-10 gap-5
            lg:items-start md:content-box">

                <div className="flex flex-col justify-center text-center
                lg:text-start">
                    <h1 className="text-3xl font-bold
                    md:text-4xl lg:text-5xl">Explore the <span className="orange-pink-purple">Technologies</span></h1>
                    <p className="text-[#6B7280]">Pick one technology per category to build your ideal stack.</p>
                </div>

                {/* All stack and user stack */}
                <div className="flex flex-col justify-center w-full gap-4
                md:flex-row">
                    
                    {/* All stack */}
                    <div className="grid grid-cols-1  w-full gap-4
                    md:grid-cols-2 lg:grid-cols-3">
                        {technologies.map(technology => <Tech key={technology.id} technology={technology}/>)}
                    </div>

                    {/* User stack */}
                    <div className="flex flex-col outline p-4 outline-gray-200 rounded-xl gap-4">
                        <div className="text-start">
                            <h3 className="font-bold">Your Stack</h3>
                            <p className="text-xs text-[#667488] font-light ">No technologies selected yet.</p>
                        </div>
                        <div className="w-full">
                            <p className="p-6 font-extralight text-center text-xs text-[#667488] outline outline-gray-300 rounded-lg outline-dashed">Your stack is empty</p>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default TechStacks