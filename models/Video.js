const mongoose = require("mongoose");
const slugify = require("slugify");

const VideoSchema = new mongoose.Schema({
  video_id: {
    type: String,
    unique: true,
  },
  original_title: String,
  updated_title: String,
  uploaded_video_url: String,
  uploaded_channel_url: String,
  thumbnail_picture: String,
  video_category: String,
  uploaded: Boolean,
  author_disp_name: String,
  author_handle: String,

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Video", VideoSchema);
