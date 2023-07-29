const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "title is required"],
    },
    description: {
      type: String,
      require: [true, "Description is required"],
    },
    image: {
      type: String,
      require: [true, "Image is required"],
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      require: [true, "user id is required "],
    },
    // likeCount: {
    //   type: Number,
    //   require: [false],
    //   default: 0,
    // },
    // likeUser: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "likeBy",
    // },
  },
  { timestamps: true }
);

const blogModel = mongoose.model("Blog", blogSchema);

module.exports = blogModel;
