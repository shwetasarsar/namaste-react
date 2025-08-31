import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    console.log("online status",onlineStatus)

    const btnHandler =()=>{
        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
    }

    return (
        <div className="header">
            <div className="logo-container">
                <Link to="/"><img src={LOGO_URL} alt="logo" className="logo"/></Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online status: {(onlineStatus) ? "✅" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={btnHandler}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;