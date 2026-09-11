import banner from "../Assets/Banner.png"
const Hero = () => {
    return (
        <>
            <header className="content-box-s flex flex-col text-center items-center justify-between py-10 gap-4
            sm:content-box md:flex-row md:text-start md:py-23.5">
                <div className="flex flex-col gap-4">
                    <div>
                        <h1 className="text-3xl font-bold
                        md:text-4xl md:font-extrabold lg:text-5xl">Build Your Ideal <br />
                        <span className="orange-pink-purple">Development Stack</span></h1>
                    </div>

                    <p className="text-[#4B5563] text-[14px] max-w-145
                    md:text-[18px]">
                        Explore frontend, backend, database, and tooling
                        options, compare them side by side, and put together
                        the stack that fits your next project.
                    </p>

                    <div className="flex gap-3 font-light justify-center text-sm
                    sm:text-lg md:justify-start">
                        <button className="orange-pink text-white px-4 py-3 rounded-lg cursor-pointer">Explore Technologies</button>
                        <button className="px-8 py-3 outline-2 outline-[#E5E7EB] rounded-lg cursor-pointer">Learn More</button>
                    </div>
                </div>

                <div>
                    <img className="md:scale-110" src={banner} alt="Complicated Banner Image" />
                </div>


            </header>
        </>
    )
}

export default Hero
