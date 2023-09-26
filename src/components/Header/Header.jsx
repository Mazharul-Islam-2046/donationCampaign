import { NavLink } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useState } from "react";


const Header = () => {


    const [menuState, setMenuState] = useState(false);
    
    const handleMenu = () => {
        setMenuState(!menuState);
    }




    return (
        <div className="flex justify-between items-center py-4">
            <img src="https://i.ibb.co/SrN2yF4/logo.png" className="w-32 md:w-52" />
            <div className="gap-12 hidden md:flex">
                <NavLink to="/" className={({isActive}) => isActive? "text-red-500 border-b border-b-red-500": "text-black"}>Home</NavLink>
                <NavLink to="/donations" className={({isActive}) => isActive? "text-red-500 border-b border-b-red-500": "text-black"}>Donations</NavLink>
                <NavLink to="/statistics" className={({isActive}) => isActive? "text-red-500 border-b border-b-red-500": "text-black"}>Statistics</NavLink>
            </div>



            <div className="md:hidden relative">
                <button onClick={handleMenu}><AiOutlineMenuUnfold className="text-xl"></AiOutlineMenuUnfold></button>
            <div className={`flex flex-col absolute bg-gray-500 p-4 right-0 z-10 ${menuState && "-top-32"}`}>
                <NavLink to="/" className={({isActive}) => isActive? "text-blue-100 border-b border-b-blue-500": "text-white"}>Home</NavLink>
                <NavLink to="/donations" className={({isActive}) => isActive? "text-blue-100 border-b border-b-blue-500": "text-white"}>Donations</NavLink>
                <NavLink to="/statistics" className={({isActive}) => isActive? "text-blue-100 border-b border-b-blue-500": "text-white"}>Statistics</NavLink>
            </div>
            </div>
        </div>
    );
};

export default Header;