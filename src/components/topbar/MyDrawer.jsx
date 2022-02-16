import React, { useContext } from "react";
import {
  Divider,
  List,
  Toolbar,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Chat, ExitToApp, Notifications, Person } from "@material-ui/icons";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { AuthContext } from "../../context/AuthContext";

const topbarIconItemList = [
  {
    icon: <Chat />,
    text: "Chat",
  },
  {
    icon: <Notifications />,
    text: "Notification",
  },
];
const topbarIconUserList = [
  {
    icon: <Person />,
    text: "Profile",
    link: true,
  },
  {
    icon: <ExitToApp />,
    text: "Logout",
    link: false,
  },
];

function MyDrawer() {
  const navigate = useHistory();
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {topbarIconItemList.map(({ icon, text }, index) => (
          <div className="topbarIconItem" key={index}>
            <ListItem button key={text}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </div>
        ))}
      </List>
      <Divider />
      <List>
        {topbarIconUserList.map(({ icon, text, link }, index) => (
          <div
            className="topbarIconItem"
            key={index}
            onClick={() => {
              if (link) {
                navigate.push(`/profile/${user.username}`);
              } else {
                localStorage.removeItem("samWadUser");
                console.log(localStorage.getItem("samWadUser"));
                navigate.push("/");
              }
            }}
          >
            <ListItem button key={text}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </div>
        ))}
      </List>
    </div>
  );
}

export default MyDrawer;
