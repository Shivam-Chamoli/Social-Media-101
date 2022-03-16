import React from "react";
import "./post.css";
import SinglePost from "./SinglePost";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import LazyLoad from "react-lazyload";

function Post({ username }) {
  const { user } = useContext(AuthContext);
  username
    ? console.log("posts/profile/" + username)
    : console.log("posts/timeline/" + user._id);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
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
        {posts.map((p) =>
          p ? (
            <LazyLoad
              key={p._id}
              height={500}
              offset={600}
              scroll={true}
              overflow={true}
            >
              <SinglePost post={p} />
            </LazyLoad>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}

export default Post;
