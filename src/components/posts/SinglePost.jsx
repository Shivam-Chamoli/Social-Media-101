import { MoreVert } from "@material-ui/icons";

function SinglePost() {
  return (
    <div className="single-post">
      <div className="post-top">
        <div className="post-top-left">
          <img
            src="./assets/download.png"
            alt=""
            className="post-profile-picture"
          />
          <span className="post-user-name">Name of Post User</span>
          <span className="post-date">5 mins ago</span>
        </div>
        <div className="post-top-right">
          <MoreVert />
        </div>
      </div>
      <div className="post-center">
        <span className="post-text">Hey Its My first Post</span>
        <img
          src="https://www.marshallsindia.com/images/younique/nature/nature-cover-slider-6.jpg"
          alt=""
          className="post-img"
        />
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
          <span className="post-like-counter">22 people liked it</span>
        </div>
        <div className="post-bottom-right">
          <span className="post-comment-counter">9 Comments</span>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
