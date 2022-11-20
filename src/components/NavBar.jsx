import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navBar">
      <span className="logo">Chat App</span>
      <div className="user">
        {currentUser && <img src={currentUser.photoURL} alt="" />}
        {currentUser && <span>{currentUser.displayName}</span>}
        <button onClick={() => signOut(auth)}>Log out</button>
      </div>
    </div>
  );
};

export default NavBar;
