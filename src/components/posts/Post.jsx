import "./post.css";
import SinglePost from "./SinglePost";
import { Posts } from "../../DummyData";
function Post() {
  return (
    <div className="post">
      <div className="postwrapper">
        {Posts.map((p) => (
          <SinglePost key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}

export default Post;
