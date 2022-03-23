import React from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../posts/Post";

function Feed({ username, props }) {
  console.log(username);

  return (
    <div className="feed">
      <div className="feedwrapper">
        {username ? <></> : <Share />}
        <Post username={username} />
      </div>
    </div>
  );
}

export default Feed;
