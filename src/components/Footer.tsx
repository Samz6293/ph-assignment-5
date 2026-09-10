import logo from "../Assets/logo-text.png"
const Footer = () => {
    return (
        <>
            <footer className="border border-gray-200">
                <div className="content-box-s flex flex-col py-10 gap-5 items-center
                md:items-start">

                    <div className="flex justify-center w-full
                    md:pb-10 md:justify-between">
                        {/* left side on big screens */}
                        <div className="flex flex-col items-center  text-center gap-4 max-w-[320px]
                        md:items-start md:text-start">
                            <img className="block" src={logo} alt="Dev Stack Logo" />
                            <p className="text-[#6B7280]">Curated tools, technologies, 
                            and resources for developers building modern software.</p>
                            <div className="flex justify-between gap-5 text-[#4B5563]">
                                <a href="#">Github</a>
                                <p>•</p>
                                <a href="#">Twitter</a>
                                <p>•</p>
                                <a href="#">LinkedIn</a>
                            </div>
                        </div>

                        {/* right side on big screens */}
                        <div className="hidden  w-[50%] justify-around gap-4
                        md:flex">
                            
                            <div className="flex flex-col gap-4 w-1/3">
                                <h3 className="font-bold">PRODUCT</h3>
                                <div className="flex flex-col gap-1 text-[#64748B]">
                                    <a href="#">Home</a>
                                    <a href="#">Technologies</a>
                                    <a href="#">Projects</a>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 w-1/3">
                                <h3 className="font-bold">COMPANY</h3>
                                <div className="flex flex-col gap-1 text-[#64748B]">
                                    <a href="#">About</a>
                                    <a href="#">Contact</a>
                                    <a href="#">Careers</a>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 w-1/3">
                                <h3 className="font-bold">LEGAL</h3>
                                <div className="flex flex-col gap-1 text-[#64748B]">
                                    <a href="#">Privacy Policy</a>
                                    <a href="#">Terms of Service</a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className=" bg-[#F3F4F6] w-full h-0.5"/>

                    <div className="flex w-full justify-between text-xs text-[#9CA3AF]">
                        <p>&copy; 2026 Dev Stack. All rights reserved.</p>
                        <div className="flex gap-2">
                            <a href="#">Privacy</a>
                            <a href="#">Terms</a>
                        </div>
                    </div>

                </div>

            </footer>
        </>
    )
}

export default Footer