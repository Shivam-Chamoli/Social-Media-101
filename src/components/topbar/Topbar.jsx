import { Chat, Notifications, Person, Search } from "@material-ui/icons";
// import { CircularProgress } from "@material-ui/core";
import "./topbar.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
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
      <div className="topbar-right">
        <div className="topbar-links">
          <span className="topbar-link">HomePage</span>
          <span className="topbar-link">Timeline</span>
        </div>
        <div className="topbar-icons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbar-icon-badge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbar-icon-badge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbar-icon-badge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "assets/download.png"
            }
            alt="person"
            className="profile-picture"
          />
        </Link>
      </div>
    </div>
  );
}

export default Topbar;
