import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import RightBar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

function Profile() {
  const { username } = useParams();
  console.log(username);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);
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
              src={
                user.coverPicture
                  ? PF + user.coverPicture
                  : PF + "assets/post/6.jpeg"
              }
              alt=""
              className="background-profile-img"
            />
            <img
              src={user.profilePicture || PF + "assets/download.png"}
              alt=""
              className="profile-picture-img"
            />
            <h1>{user.username}</h1>
            <span>{user.desc}</span>
          </div>
          <div className="profile-right-bottom">
            <Feed username={user.username} />
            <RightBar user={user} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
