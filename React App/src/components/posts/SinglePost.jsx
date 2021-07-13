import { MoreVert } from "@material-ui/icons";
import { Users } from "../../DummyData";

function SinglePost({ post }) {
  const User = Users.filter((u) => u.id === post.userId)[0];
  console.log(User);
  return (
    <div className="single-post">
      <div className="post-top">
        <div className="post-top-left">
          <img
            src={User.profilePicture}
            alt=""
            className="post-profile-picture"
          />
          <span className="post-user-name">{User.username}</span>
          <span className="post-date"> {post.date} </span>
        </div>
        <div className="post-top-right">
          <MoreVert />
        </div>
      </div>
      <div className="post-center">
        <span className="post-text">{post.desc}</span>
        <img src={post.photo} alt="" className="post-img" />
      </div>
      <div className="post-bottom">
        <div className="post-bottom-left">
          <img
            src="https://cdn.worldvectorlogo.com/logos/facebook-like.svg"
            alt=""
            className="like-icon"
          />
          <img
            src="https://st2.depositphotos.com/1006689/10063/v/450/depositphotos_100630368-stock-illustration-heart-vector-icon.jpg"
            alt=""
            className="like-icon"
          />
          <span className="post-like-counter">{post.like} people liked it</span>
        </div>
        <div className="post-bottom-right">
          <span className="post-comment-counter">{post.comment} Comments</span>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
