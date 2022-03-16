// import { CircularProgress } from "@material-ui/core";
import "./topbar.css";
import React from "react";
import { Link } from "react-router-dom";
import TopbarRightIcons from "./TopbarRightIcons";
import { Search } from "@material-ui/icons";

function Topbar() {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <Link to={`/`}>
          <span className="logo"> SamWaad </span>
        </Link>
      </div>
      <div className="topbar-center">
        <div className="searchBar">
          <Search className="search-svg" />
          <input
            type="text"
            className="searchInput"
            placeholder="Discover your freinds, posts, likes"
          />
        </div>
      </div>
      <TopbarRightIcons />
    </div>
  );
}

export default Topbar;
