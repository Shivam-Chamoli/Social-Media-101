import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import RightBar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";

function Profile() {
  return (
    <div className="profile">
      <Topbar />
      <div className="profile-body-container">
        <div className="profile-left">
          <Leftbar />
        </div>
        <div className="profile-right">
          <div className="profile-right-top">
            <img
              src="assets/post/8.jpeg"
              alt=""
              className="background-profile-img"
            />
            <img
              src="assets/person/6.jpeg"
              alt=""
              className="profile-picture-img"
            />
            <h1>User Name</h1>
            <span>
              User description Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Debitis, in?
            </span>
          </div>
          <div className="profile-right-bottom">
            <Feed />
            <RightBar profilePage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
