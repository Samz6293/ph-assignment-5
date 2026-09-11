import { CiMenuBurger } from "react-icons/ci"
import logo from "../Assets/logo-text.png"

const Nav = () => {
    return (
        <nav className="sticky top-0 z-50 border bg-white border-gray-200 text-[10px] 
        sm:text-xs lg:text-sm">
            <div className="content-box-s grid grid-cols-3 items-center p-3 
            sm:content-box">
                <CiMenuBurger className="md:hidden"/>

                <div className="flex justify-center 
                md:justify-start">
                    <img className="block h-5 sm:h-7 lg:h-8" src={logo} alt="Dev Stack Logo" />
                </div>

                <ul className="hidden text-gray-500 justify-center gap-4
                md:flex">
                    <li className="hover:text-[#D91B7E]"><a href="#">Home</a></li>
                    <li className="hover:text-[#D91B7E]"><a href="#">Technologies</a></li>
                    <li className="hover:text-[#D91B7E]"><a href="#">Projects</a></li>
                    <li className="hover:text-[#D91B7E]"><a href="#">About</a></li>
                    <li className="hover:text-[#D91B7E]"><a href="#">Contact</a></li>
                </ul>

                <div className="flex gap-2 items-center justify-end 
                md:gap-4">
                    <button className="font-bold text-gray-600 cursor-pointer">Sign In</button>
                    <button className="bg-[#D91B7E] text-white rounded-full px-3 py-0.5 cursor-pointer
                    hover:bg-pink-600
                    sm:py-1">Sign Up</button>
                </div>
            </div>
        </nav>
    )
}

export default Nav