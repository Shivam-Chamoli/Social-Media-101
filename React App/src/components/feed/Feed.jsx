import React from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../posts/Post";

function Feed() {
  return (
    <div className="feed">
      <div className="feedwrapper">
        <Share />
        <Post />
      </div>
    </div>
  );
}

export default Feed;
