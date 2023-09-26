import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <div className="flex justify-between items-center py-4">
            <img src="https://i.ibb.co/SrN2yF4/logo.png" className="w-52" />
            <div className="flex gap-12">
                <NavLink to="/" className={({isActive}) => isActive? "text-red-500 border-b border-b-red-500": "text-black"}>Home</NavLink>
                <NavLink to="/donations" className={({isActive}) => isActive? "text-red-500 border-b border-b-red-500": "text-black"}>Donations</NavLink>
                <NavLink to="/statistics" className={({isActive}) => isActive? "text-red-500 border-b border-b-red-500": "text-black"}>Statistics</NavLink>
            </div>
        </div>
    );
};

export default Header;