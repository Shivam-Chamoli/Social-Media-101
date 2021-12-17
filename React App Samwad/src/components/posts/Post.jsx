import "./post.css";
import SinglePost from "./SinglePost";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
axios.defaults.baseURL = "http://localhost:3000/";

function Post({ username }) {
  const { user } = useContext(AuthContext);
  console.log("posts/timeline/" + user._id);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log(username);
    const fetchPost = async () => {
      const res = username
        ? await axios.get("posts/profile/" + username)
        : await axios.get("posts/timeline/" + user._id);
      setPosts(res.data);
      console.log(res);
    };
    fetchPost();
  }, [user, username]);

  return (
    <div className="post">
      <div className="postwrapper">
        {posts.map((p) => (p ? <SinglePost key={p._id} post={p} /> : ""))}
      </div>
    </div>
  );
}

export default Post;
