//getting all node modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");

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

//Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

//routes
const usersRoute = require(__dirname + "/routes/users");
app.use("/api/users", usersRoute);

const authRoute = require(__dirname + "/routes/auth");
app.use("/api/auths", authRoute);

const postRoute = require(__dirname + "/routes/post");
app.use("/api/posts", postRoute);

//Listen request
app.listen("8800", () => {
  console.log("Server Started Successfully");
});
