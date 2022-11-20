import React from "react";
import SideBar from "./../components/SideBar";
import Chat from "./../components/Chat";
import "./../style.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
