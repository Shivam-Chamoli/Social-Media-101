import {
  EmojiEmotions,
  Label,
  LocationOn,
  PermMedia,
} from "@material-ui/icons";
import React from "react";
import "./share.css";

function Share() {
  return (
    <div className="share">
      <div className="sharewrapper">
        <div className="share-top">
          <img
            src="./assets/download.png"
            alt=""
            className="share-profile-img"
          />
          <input
            type="text"
            className="share-input"
            placeholder="Whats on your mind"
          />
        </div>
        <hr className="share-hr" />
        <div className="share-bottom">
          <div className="share-options">
            <div className="share-option">
              <PermMedia htmlColor="tomato" className="share-option-icon" />
              <span className="share-icon-text"> Photo or Video</span>
            </div>
            <div className="share-option">
              <Label htmlColor="blue" className="share-option-icon" />
              <span className="share-icon-text"> Tag</span>
            </div>
            <div className="share-option">
              <LocationOn htmlColor="green" className="share-option-icon" />
              <span className="share-icon-text"> Loacation</span>
            </div>
            <div className="share-option">
              <EmojiEmotions
                htmlColor="goldenrod"
                className="share-option-icon"
              />
              <span className="share-icon-text"> Feeling</span>
            </div>
          </div>
          <button className="share-btn">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
