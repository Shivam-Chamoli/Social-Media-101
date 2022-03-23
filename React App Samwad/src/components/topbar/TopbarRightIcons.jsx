import React, { useEffect, useState, useContext } from "react";
import { Chat, ExitToApp, Notifications, Person } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Hamburger from "./Hamburger";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function TopbarRightIcons() {
  const { width } = useWindowDimensions();
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useHistory();

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const topbarRightIconsFull = () => {
    return (
      <>
        <div className="topbar-icons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbar-icon-badge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbar-icon-badge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbar-icon-badge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "assets/download.png"
            }
            alt="person"
            className="profile-picture"
          />
        </Link>
        <div
          className="topbarIconItem logoutIcon"
          onClick={() => {
            localStorage.removeItem("samWadUser");
            console.log(localStorage.getItem("samWadUser"));
            try {
              dispatch({ type: "LOGOUT" });
            } catch (err) {
              dispatch({ type: "LOGOUT_FAILURE", payload: err });
            }
            navigate.push("/login-signup");
          }}
        >
          <ExitToApp colour={"white"} />
        </div>
      </>
    );
  };

  return (
    <div className="topbar-right">
      <div className="topbar-links">
        <span className="topbar-link">HomePage</span>
        <span className="topbar-link">Timeline</span>
      </div>

      {width < 560 ? <Hamburger /> : topbarRightIconsFull()}
    </div>
  );
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
