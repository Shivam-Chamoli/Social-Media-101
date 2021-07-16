import "./post.css";
import SinglePost from "./SinglePost";
import { useState, useEffect } from "react";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/";
function Post({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("feedrendered");
    const fetchPost = async () => {
      const res = username
        ? await axios.get("posts/profile/" + username)
        : await axios.get("posts/timeline/60d10774552e1756541c438d");
      setPosts(res.data);
    };
    fetchPost();
  }, [username]);

  return (
    <div className="post">
      <div className="postwrapper">
        {posts.map((p) => (
          <SinglePost key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}

export default Post;
