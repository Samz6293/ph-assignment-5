import { use } from "react"
import type { TechStackProps } from "../../types"

const TechStacks = ({technologiesPromise}: TechStackProps) => {
    const technologies = use(technologiesPromise);
    console.log(technologies);
    return (
        <>
            <section className="content-box-s flex flex-col items-center py-10 gap-5
            md:content-box">

                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold">Explore the <span className="orange-pink-purple">Technologies</span></h2>
                    <p className="text-[#6B7280]">Pick one technology per category to build your ideal stack.</p>
                </div>

                {/* All stack and user stack */}
                <div className="flex  w-full">
                    
                    {/* All stack */}
                    <div className="grid grid-cols-1  w-full
                    md:grid-cols-3">
                        {}
                    </div>

                    {/* User stack */}
                    <div className="bg-blue-500 h-5 w-full"></div>


                </div>
            </section>
        </>
    )
}

export default TechStacks