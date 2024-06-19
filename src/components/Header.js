import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

// export const Header = () => {
//OR
const Header = () => {
  const [BtnNameReact, setBtnNameReact] = useState("login");

  const onlineStatus = useOnlineStatus();

  //React Context
  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  //Subscribing to the sotre using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  return (
    <div
      className="h-20 w-full flex justify-between bg-pink-50 shadow-lg
     sm:bg-yellow-200 lg:bg-green-50 font-semibold"
    >
      {/* if device is greater then sm */}
      <div className="logo-container">
        <img className="w-[150px] h-20" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status:{onlineStatus ? "✅" : "🔴"}</li>

          <li className="px-4">
            <Link to="/">Home</Link>
          </li>

          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>

          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>

          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>

          <li className="px-4 font-bold text-2xl">
            <Link to="/cart"> Cart-({cartItems.length} items)</Link>
          </li>

          <button
            className="login"
            onClick={() => {
              BtnNameReact === "login"
                ? setBtnNameReact("logout")
                : setBtnNameReact("login");
            }}
          >
            {BtnNameReact}
          </button>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
