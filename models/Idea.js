const mongoose = require("mongoose");
const slugify = require("slugify");

const IdeaSchema = new mongoose.Schema({
  idea_id: {
    type: String,
    unique: true,
  },
  article_title: String,
  uploaded_article_url: String,
  uploaded_channel_url: String,
  thumbnail_picture: String,
  idea_category: String,
  uploaded: Boolean,
  author_disp_name: String,
  author_handle: String,
  idea_saved_url: String,

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Idea", IdeaSchema);
