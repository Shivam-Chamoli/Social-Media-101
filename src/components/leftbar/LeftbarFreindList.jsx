import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import LeftBarFriendSingle from "./LeftBarFriendSingle";

function LeftbarFreindList() {
  const { user } = useContext(AuthContext);
  console.log(user._id);
  const [followers, setFollowers] = useState([]);
  useEffect(() => {
    const fetchFollowers = async () => {
      const res = await axios.get("users/" + user._id + "/friends");
      setFollowers(res.data);
      console.log(res);
    };
    fetchFollowers();
  }, [user]);
  console.log(followers);
  return (
    <ul className="leftbar-friend-list">
      {followers.map((singleFollower) => {
        return (
          <LeftBarFriendSingle
            key={singleFollower._id}
            name={singleFollower.username}
            profilePicture={singleFollower.profilePicture}
          />
        );
      })}
    </ul>
  );
}

export default LeftbarFreindList;
