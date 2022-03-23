import React from "react";

function LeftBarFriendSingle({ name, profilePicture }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <li className="leftbar-friend">
        <img
          src={profilePicture || PF + "assets/download.png"}
          alt="freind"
          className="leftbar-friend-img"
        />
        <span className="leftbar-friend-name">{name}</span>
      </li>
    </>
  );
}

export default LeftBarFriendSingle;
