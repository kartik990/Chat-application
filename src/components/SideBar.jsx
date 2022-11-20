import React from "react";
import NavBar from "./../components/NavBar";
import SearchBar from "./SearchBar";
import Chats from "./Chats";

const sideBar = () => {
  return (
    <div className="sideBar">
      <NavBar />
      <SearchBar />
      <Chats />
    </div>
  );
};

export default sideBar;
