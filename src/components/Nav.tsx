import { CiMenuBurger } from "react-icons/ci"
import logo from "../Assets/logo-text.png"

const Nav = () => {
    return (
        <nav className="sticky top-0 z-50 border bg-white border-gray-200 text-[10px] 
        sm:text-xs lg:text-sm">
            <div className="content-box-s flex justify-between items-center p-3 
            sm:content-box">
                <CiMenuBurger className="text-xl md:hidden"/>

                <div className="flex justify-center  
                md:justify-start">
                    <img className="block ml-15 h-6 sm:h-7 md:ml-0 lg:h-8" src={logo} alt="Dev Stack Logo" />
                </div>

                <ul className="hidden text-gray-500 justify-center gap-4
                md:flex">
                    <li className="nav-hover"><a href="#">Home</a></li>
                    <li className="nav-hover"><a href="#">Technologies</a></li>
                    <li className="nav-hover"><a href="#">Projects</a></li>
                    <li className="nav-hover"><a href="#">About</a></li>
                    <li className="nav-hover"><a href="#">Contact</a></li>
                </ul>

                <div className="flex gap-3 items-center justify-end 
                md:gap-4">
                    <button className="font-bold text-gray-600 cursor-pointer transition-all duration-200
                    hover:text-gray-500 active:scale-90">Sign In</button>
                    <button className="bg-[#D91B7E] text-white rounded-full px-3 py-0.5 cursor-pointer
                    hover:bg-pink-600 active:scale-90 transition-all duration-200
                    sm:py-1">Sign Up</button>
                </div>
            </div>
        </nav>
    )
}

export default Nav