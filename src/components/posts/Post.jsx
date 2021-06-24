import "./post.css";
import SinglePost from "./SinglePost";

function Post() {
  return (
    <div className="post">
      <div className="postwrapper">
        <SinglePost />
        <SinglePost />
      </div>
    </div>
  );
}

export default Post;
