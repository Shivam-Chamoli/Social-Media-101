//getting all node modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const multer = require("multer");
const path = require("path");

const app = express();
dotenv.config();

//db connections
mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.log(err);
    else console.log("connected to db");
  }
);

app.use("/images", express.static(path.join(__dirname, "public/images")));

//Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/assets/post");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File Uploaded Successfully");
  } catch (err) {
    console.log(err);
  }
});
//routes
const usersRoute = require(__dirname + "/routes/users");
app.use("/api/users", usersRoute);

const authRoute = require(__dirname + "/routes/auth");
app.use("/api/auths", authRoute);

const postRoute = require(__dirname + "/routes/post");
app.use("/api/posts", postRoute);

//Listen request
app.listen(process.env.PORT || "8800", () => {
  console.log("Server Started Successfully");
});
