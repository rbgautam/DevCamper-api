const express = require("express");
const videorouter = express.Router();
const video = require("../models/Video");
const { protect } = require("../middleware/auth");
const advancedFilters = require("../middleware/advancedFilters");
const {
  getVideos,
  getVideo,
  createVideo,
  updateVideo,
  deleteVideo,
} = require("../controllers/videos");

videorouter
  .route("/")
  .get(advancedFilters(video, "users"), getVideos)
  .post(protect, createVideo);
// router.route('/').get(getRecipes) = explicitly included with /:id route
videorouter
  .route("/:id")
  .get(getVideo)
  .put(protect, updateVideo)
  .delete(protect, deleteVideo);

module.exports = videorouter;
