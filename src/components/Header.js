import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

// export const Header = () => { 
  //OR
const Header = () => {
  const [BtnNameReact , setBtnNameReact] = useState("login");
    return (
      <div className="header">
        <div className="logo-container">
          <img 
          className="logo" 
          src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login" 
            onClick={() =>{
              BtnNameReact === "login" ? setBtnNameReact("logout") : setBtnNameReact("login")
              }}>
              {BtnNameReact}
            </button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;