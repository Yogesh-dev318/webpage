import { FaCartShopping } from "react-icons/fa6"
import Logo from "../../assets/logo.png"
import Darkmode from "./Darkmode"
export default function Navbar(){
    return(
        <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-300 ">
            <div className="container py-3">
                <div className="flex justify-between items-center">
                    <div className="">
                        <a href="#" className="flex gap-2 text-2xl sm:text-3xl  font-bold"><img className="w-10 h-10 "  src={Logo}/>Foodie</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <div>
                            <Darkmode/>
                        </div>
                        <ul className="hidden sm:flex gap-4">
                            <li><a href="#" className="inline-block py-4 px-4 hover:text-primary">Home</a></li>
                            <li><a href="#" className="inline-block py-4 px-4 hover:text-primary">About</a></li>
                            <li><a href="#" className="inline-block py-4 px-4 hover:text-primary">Contact</a></li>
                        </ul>
                        <button className="bg-primary px-4 py-1 rounded-full text-white hover:scale-105 duration-200 sm:hidden flex justify-center items-center gap-2">
                            Order <FaCartShopping className="cursor-pointer text-xl drop-shadow-md text-white"></FaCartShopping></button>
                    </div>
                </div>
            </div>
        </div>
    )
}