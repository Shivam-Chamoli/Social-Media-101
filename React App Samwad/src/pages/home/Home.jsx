import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import RightBar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <Topbar />
      <div className="home-body-container">
        <Leftbar />
        <Feed />
        <RightBar />
      </div>
    </div>
  );
}

export default Home;
