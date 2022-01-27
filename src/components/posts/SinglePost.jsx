import { MoreVert } from "@material-ui/icons";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function SinglePost({ post }) {
  const [user, setUser] = useState({});
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  //getting the current user from auth context
  const { user: currentUser } = useContext(AuthContext);

  //setting isLiked, if the user already likes the post
  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  //getting the user of post being rendered
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users?userId=${post.userId}`);
      console.log(res.data);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  //like and dislike funcionality
  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) {
      console.log(err);
    }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
    console.log("Successfully Liked");
  };

  return (
    <div className="single-post">
      <div className="post-top">
        <div className="post-top-left">
          <Link to={`profile/${user.username}`}>
            <img
              src={
                user.profilePicture
                  ? PF + user.profilePicture
                  : PF + "assets/download.png"
              }
              alt=""
              className="post-profile-picture"
            />
          </Link>
          <span className="post-user-name">{user.username}</span>
          <span className="post-date"> {format(post.createdAt)} </span>
        </div>
        <div className="post-top-right">
          <MoreVert />
        </div>
      </div>
      <div className="post-center">
        <span className="post-text">{post.description}</span>
        <img src={PF + post.img} alt="" className="post-img" />
      </div>
      <div className="post-bottom">
        <div className="post-bottom-left">
          <img
            src="https://cdn.worldvectorlogo.com/logos/facebook-like.svg"
            alt=""
            className="like-icon"
            onClick={likeHandler}
          />
          <img
            src="https://st2.depositphotos.com/1006689/10063/v/450/depositphotos_100630368-stock-illustration-heart-vector-icon.jpg"
            alt=""
            className="like-icon"
            onClick={likeHandler}
          />
          <span className="post-like-counter">{like} people liked it</span>
        </div>
        <div className="post-bottom-right">
          <span className="post-comment-counter">{post.comment} Comments</span>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
