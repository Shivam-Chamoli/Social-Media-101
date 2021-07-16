import React from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../posts/Post";

function Feed({ username }) {
  return (
    <div className="feed">
      <div className="feedwrapper">
        <Share />
        <Post username={username} />
      </div>
    </div>
  );
}

export default Feed;
