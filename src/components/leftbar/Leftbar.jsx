import {
  Bookmarks,
  Chat,
  Event,
  Group,
  HelpOutline,
  PlayCircleFilledOutlined,
  RssFeed,
  School,
  WorkOutline,
} from "@material-ui/icons";
import "./leftbar.css";
import React from "react";
import LeftbarFreindList from "./LeftbarFreindList";
import { Link } from "react-router-dom";

function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbar-wrapper">
        <ul className="leftbar-list">
          <li className="leftbar-list-item">
            <Link to={"/"}>
              <RssFeed className="leftbar-list-item-icon" />
              <span className="leftbar-list-item-text">Feed</span>
            </Link>
          </li>
          <li className="leftbar-list-item">
            <Link to={"/chats"}>
              <Chat className="leftbar-list-item-icon" />
              <span className="leftbar-list-item-text">Chat</span>
            </Link>
          </li>
          <li className="leftbar-list-item">
            <Link to={"/vedioFeed"}>
              <PlayCircleFilledOutlined className="sidebar-list-item-icon" />
              <span className="leftbar-list-item-text">Videos</span>
            </Link>
          </li>
          <li className="leftbar-list-item">
            <Group className="leftbar-list-item-icon" />
            <span className="leftbar-list-item-text">Groups</span>
          </li>
          <li className="leftbar-list-item">
            <Bookmarks className="leftbar-list-item-icon" />
            <span className="leftbar-list-item-text">Bookmarks</span>
          </li>
          <li className="leftbar-list-item">
            <HelpOutline className="leftbar-list-item-icon" />
            <span className="leftbar-list-item-text">Questions</span>
          </li>
          <li className="leftbar-list-item">
            <WorkOutline className="leftbar-list-item-icon" />
            <span className="leftbar-list-item-text">Jobs</span>
          </li>
          <li className="leftbar-list-item">
            <Event className="leftbar-list-item-icon" />
            <span className="leftbar-list-item-text">Events</span>
          </li>
          <li className="leftbar-list-item">
            <School className="leftbar-list-item-icon" />
            <span className="leftbar-list-item-text">Events</span>
          </li>
        </ul>
        <button className="show-more-btn">Show More</button>
        <hr className="leftbar-hr"></hr>
        <LeftbarFreindList />
      </div>
    </div>
  );
}

export default Leftbar;
