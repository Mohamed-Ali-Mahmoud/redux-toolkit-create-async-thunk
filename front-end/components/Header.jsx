import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { logInOut } from "../store/authSlice";
const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <div className="flex justify-between bg-gray-200 w-full py-2 px-4 mb-5">
      <h2 className="text-4xl text-blue-700">Booky</h2>

      <button
        className="border-2 border-blue-700 hover:bg-blue-700 text-blue-700 hover:text-white font-bold py-2 px-4 rounded cursor-pointer"
        onClick={() => dispatch(logInOut())}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Header;
