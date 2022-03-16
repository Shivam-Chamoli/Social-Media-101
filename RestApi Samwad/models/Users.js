const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      min: 6,
      require: true,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
      max: 50,
    },
    currCity: {
      type: String,
      max: 50,
    },
    fromCity: {
      type: String,
      max: 50,
    },
    realtionship: {
      type: Number,
      enum: [1, 2, 3],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = {
  model: mongoose.model("User", userSchema),
  schema: userSchema,
};
