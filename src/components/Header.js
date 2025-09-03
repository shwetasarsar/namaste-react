import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () =>{
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    // console.log("online status",onlineStatus)

    const btnHandler =()=>{
        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
    }

    const { loggedInUser } = useContext(UserContext);

    return (
        <div className="flex justify-between bg-orange-500 shadow-lg mb-2 items-center">
            <div className="logo-container">
                <Link to="/"><img src={LOGO_URL} alt="logo" className="w-32"/></Link>
            </div>
            <div className="nav-items">
                <ul className="flex p-4 m-4">
                    <li className="px-4 text-lg font-bold">Online status: {(onlineStatus) ? "✅" : "🔴"}</li>
                    <li className="px-4 text-lg font-bold"><Link className="cursor-pointer" to="/">Home</Link></li>
                    <li className="px-4 text-lg font-bold"><Link className="cursor-pointer" to="/about">About Us</Link></li>
                    <li className="px-4 text-lg font-bold"><Link className="cursor-pointer" to="/contact">Contact Us</Link></li>
                    <li className="px-4 text-lg font-bold"><Link className="cursor-pointer" to="/grocery">Grocery</Link></li>
                    <li className="px-4 text-lg font-bold"><Link className="cursor-pointer" to="/cart">Cart</Link></li>
                    <button className="px-4 text-lg font-bold" onClick={btnHandler}>{btnName}</button>
                    <li className="px-4 text-lg font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;