import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import RightBar from "../../components/rightbar/Rightbar";
import VedioFeed from "../../components/feed/VedioFeed.jsx";
import "../home/home.css";

function Home() {
  return (
    <div className="home">
      <Topbar />
      <div className="home-body-container">
        <Leftbar />
        <VedioFeed props={"vedio"} />
        <RightBar />
      </div>
    </div>
  );
}

export default Home;
