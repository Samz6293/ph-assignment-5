import { use } from "react"
import type { TechStackProps } from "../../types"
import Tech from "./Tech";
import ChosenStacks from "./ChosenStacks";

const TechStacks = ({technologiesPromise, selectedStack, handleSelectedStack, handleClear}: TechStackProps) => {
    const technologies = use(technologiesPromise);
    return (
        <>
            <section className="content-box-s flex flex-col items-center my-8 gap-5
            lg:items-start lg:content-box lg:my-40">

                <div className="flex flex-col justify-center text-center gap-2
                lg:text-start">
                    <h1 className="text-2xl font-bold
                    md:text-4xl lg:text-5xl">Explore the <span className="orange-pink-purple">Technologies</span></h1>
                    <p className="text-xs text-[#6B7280] md:text-sm">Pick one technology per category to build your ideal stack.</p>
                </div>

                {/* All stack and user stack */}
                <div className="flex flex-col justify-center w-full gap-4
                md:flex-row">
                    
                    {/* All stack */}
                    <div className="grid grid-cols-1  w-full gap-4
                    md:grid-cols-2 xl:grid-cols-3">
                        {technologies.map(technology => <Tech key={technology.id} technology={technology}
                        selectedStack={selectedStack} handleSelectedStack={handleSelectedStack}/>)}
                    </div>

                    {/* User stack */}
                    <ChosenStacks selectedStack={selectedStack} handleSelectedStack={handleSelectedStack} handleClear={handleClear}/>


                </div>
            </section>
        </>
    )
}

export default TechStacks