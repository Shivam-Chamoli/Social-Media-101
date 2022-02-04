import {
  EmojiEmotions,
  Label,
  LocationOn,
  PermMedia,
} from "@material-ui/icons";
import { React, useContext, useRef, useState } from "react";
import "./share.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function Share() {
  const { user } = useContext(AuthContext);
  console.log("Share user:" + user.username);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    //creating new post
    const newPost = {
      userId: user._id,
      description: desc.current.value,
    };
    //checking for file
    if (file) {
      const data = new FormData();
      //creating filename as with current date and time with file name
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = "assets/post/" + fileName;
      console.log(newPost);
      //uploading file
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    //uploading the post to db
    try {
      await axios.post("/posts/add-post", newPost);
      //reload the entire page
      window.location.reload();
    } catch (err) {}
  };

  return (
    <div className="share">
      <div className="sharewrapper">
        <div className="share-top">
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : "./assets/download.png"
            }
            alt=""
            className="share-profile-img"
          />
          <input
            type="text"
            className="share-input"
            placeholder={"Whats on your mind " + user.username}
            ref={desc}
          />
        </div>
        <hr className="share-hr" />
        <form className="share-bottom" onSubmit={submitHandler}>
          <div className="share-options">
            <label htmlFor="file" className="share-option">
              <PermMedia htmlColor="tomato" className="share-option-icon" />
              <span className="share-icon-text"> Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg,"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
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
          <button className="share-btn" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}

export default Share;
