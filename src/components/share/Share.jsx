import {
  EmojiEmotions,
  Label,
  LocationOn,
  PermMedia,
} from "@material-ui/icons";
import React, { useContext, useRef, useState } from "react";
import "./share.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import imageCompression from "browser-image-compression";

async function compress(imageFile) {
  console.log("originalFile instanceof Blob", imageFile instanceof Blob); // true
  console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };
  try {
    const compressedFile = await imageCompression(imageFile, options);
    console.log(
      "compressedFile instanceof Blob",
      compressedFile instanceof Blob
    ); // true
    console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB

    //await uploadToServer(compressedFile); // write your own logic
    return compressedFile;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// const uploadToServer = () => {};

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
    const file2 = await compress(file);
    //checking for file
    if (file2) {
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

  //showing the images to user
  const [uploadedImg, setUploadedImage] = useState(null);
  function showUploadedImage(input) {
    console.log(input);
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      var url = reader.readAsDataURL(input.files[0]);

      console.log("inside the showUploadedImage");
      reader.onloadend = function (e) {
        setUploadedImage(reader.result);
      };
      console.log(url);
    }
  }

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
        {uploadedImg === null ? (
          <></>
        ) : (
          <img
            id="uploadedImage"
            src={uploadedImg}
            alt="your"
            style={{
              height: "500px",
              width: "100%",
              borderRadius: "10px",
              margin: "5px",
            }}
          />
        )}
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
                onChange={(e) => {
                  setFile(e.target.files[0]);
                  showUploadedImage(e.target);
                }}
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
