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
