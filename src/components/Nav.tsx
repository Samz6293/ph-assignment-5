import { CiMenuBurger } from "react-icons/ci"
import logo from "../Assets/logo-text.png"

const Nav = () => {
    return (
        <nav className="border border-gray-200 text-[10px] sm:text-xs">
            <div className="content-box-s flex justify-between items-center pt-2 pb-1
            sm:p-3 sm:content-box">
                <CiMenuBurger className="sm:hidden"/>

                <div className="justify-center">
                    <img className="block h-5 sm:h-7" src={logo} alt="Dev Stack Logo" />
                </div>

                <ul className="hidden text-gray-500 justify-between gap-4
                sm:flex">
                    <li className="hover:text-[#D91B7E]"><a href="#">Home</a></li>
                    <li className="hover:text-[#D91B7E]"><a href="#">Technologies</a></li>
                    <li className="hover:text-[#D91B7E]"><a href="#">Projects</a></li>
                    <li className="hover:text-[#D91B7E]"><a href="#">About</a></li>
                    <li className="hover:text-[#D91B7E]"><a href="#">Contact</a></li>
                </ul>

                <div className=" flex gap-2">
                    <button className="font-bold text-gray-600">Sign In</button>
                    <button className="bg-[#D91B7E] text-white rounded-full px-2 py-0.5">Sign Up</button>
                </div>
            </div>
        </nav>
    )
}

export default Nav