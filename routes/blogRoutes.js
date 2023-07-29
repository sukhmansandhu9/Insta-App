const express = require("express");
const {
  getAllBlogsController,
  createBlogController,
  updateBlogController,
  getBlogByIdController,
  deleteBlogController,
  userBlogController,
  likeByUserBlogController,
} = require("../controllers/blogController");

// Router Object
const router = express.Router();

// Routes
// Get || All Blogs
router.get("/all-blog", getAllBlogsController);

// Post || create Blog
router.post("/create-blog", createBlogController);

// Post || update Blog
router.put("/update-blog/:id", updateBlogController);

// Get || Single Blog Details
router.get("/get-blog/:id", getBlogByIdController);

// Delete || delete Blog
router.delete("/delete-blog/:id", deleteBlogController);

// Get || user blog
router.get("/user-blog/:id", userBlogController);

// Add Like User
// router.post("/add-like-user", likeByUserBlogController);

module.exports = router;
