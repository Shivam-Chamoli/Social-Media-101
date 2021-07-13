import { Chat, Notifications, Person, Search } from "@material-ui/icons";
import "./topbar.css";

function Topbar() {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <span className="logo"> SamWad </span>
      </div>
      <div className="topbar-center">
        <div className="searchBar">
          <Search className="search-svg" />
          <input
            type="text"
            className="searchInput"
            placeholder="Discover your freinds, posts, likes"
          />
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbar-links">
          <span className="topbar-link">HomePage</span>
          <span className="topbar-link">Timeline</span>
        </div>
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
        <img
          src="./assets/download.png"
          alt="person"
          className="profile-picture"
        />
      </div>
    </div>
  );
}

export default Topbar;
